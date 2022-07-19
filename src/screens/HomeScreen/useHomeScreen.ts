import { useRef } from 'react'
import { Alert, Animated, Easing } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import useLocalStorage from '../../hooks/useLocalStorage';
import XLSX from 'xlsx'
import { readFile } from "react-native-fs";

const useHomeScreen = () => {
  const animationRef = useRef(new Animated.Value(0)).current
  const importFileOptionsVisible = useRef(false)
  const {
    csvFiles,
    pngFiles,
    saveCsvFile,
    savePngFile
  } = useLocalStorage()

  function toggleButtons() {
    const areButtonsVisible = importFileOptionsVisible.current

    Animated.timing(animationRef, {
      toValue: areButtonsVisible ? 0 : 1,
      duration: 250,
      easing: areButtonsVisible ? Easing.exp : Easing.out(Easing.ease),
      useNativeDriver: true
    }).start(() => {
      importFileOptionsVisible.current = !areButtonsVisible
    });
  }

  async function importFile(type: 'png' | 'csv') {
    try {
      let message = ''

      const data = await DocumentPicker.pickSingle({
        copyTo: 'documentDirectory',
        type: type === 'csv'
          ? [DocumentPicker.types.csv, 'text/comma-separated-values']
          : 'image/png'
      })

      if (data.fileCopyUri) {
        const uri = decodeURIComponent(data.fileCopyUri)

        if (type === 'csv') {
          const bstr = await readFile(uri, "ascii");
          let sheet = XLSX.read(bstr, { type: "binary" });
          let csv: any = XLSX.utils.sheet_to_json(sheet.Sheets[sheet.SheetNames[0]]);

          if (csv.length) {
            let headers = Object.keys(csv[0])

            if (headers.length > 1 || headers[0] !== 'Total') {
              toggleButtons()
              return Alert.alert('Wrong CSV format', "The only acceptable format is line 1 as header (Total), and the rest as data on the very first column.")
            }
          }

          await saveCsvFile({
            csv,
            name: data.name,
            totalAmount: csv.reduce((prev, next) => {
              if (isNaN(next['Total'])) return prev
              else return prev + next['Total']
            }, 0)
          })
          message = `${data.name} was imported to your sheets.`
        } else {
          await savePngFile(uri)
          message = `${data.name} was imported to your gallery.`
        }

        Alert.alert('Success!', message)
        toggleButtons()
      } else {
        toggleButtons()
        return Alert.alert('Erro while copying!', "The file could not be retrieved.")
      }
    } catch (error) {
      toggleButtons()
      if (error.message.includes('cancel')) return
      Alert.alert('Erro while importing!', error.message)
      console.log({ error });
    }
  }

  return {
    toggleButtons,
    animationRef,
    importFile,
    csvFiles,
    pngFiles,
  }
}

export default useHomeScreen
