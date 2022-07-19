import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

interface ICsvFile {
  name: string;
  totalAmount: number;
  csv: Record<string, any>[];
}

const useLocalStorage = () => {
  const [csvFiles, setCsvFiles] = useState<ICsvFile[]>([])
  const [pngFiles, setPngFiles] = useState<string[]>([])

  async function getCsvFiles() {
    try {
      const value = await AsyncStorage.getItem('@csvs')
      if (value) setCsvFiles(JSON.parse(value))
    } catch (e: any) {
      Alert.alert('Error on getCsvFiles', e.message)
    }
  }

  async function saveCsvFile(file: ICsvFile) {
    try {
      const newData = [...csvFiles, file]
      setCsvFiles(newData)
      await AsyncStorage.setItem('@csvs', JSON.stringify(newData))
    } catch (e: any) {
      Alert.alert('Error on saveCsvFile', e.message)
    }
  }

  async function getPngFiles() {
    try {
      const value = await AsyncStorage.getItem('@pngs')
      if (value) setPngFiles(JSON.parse(value))
    } catch (e: any) {
      Alert.alert('Error on getCsvFiles', e.message)
    }
  }

  async function savePngFile(file: string) {
    try {
      const newData = [...pngFiles, file]
      await AsyncStorage.setItem('@pngs', JSON.stringify(newData))
      setPngFiles(newData)
    } catch (e: any) {
      Alert.alert('Error on saveCsvFile', e.message)
    }
  }

  async function clearData() {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }
  }

  useEffect(() => {
    // clearData()
    getCsvFiles()
    getPngFiles()
  }, [])

  return {
    csvFiles,
    saveCsvFile,
    pngFiles,
    savePngFile,
  }
}
export default useLocalStorage