import useLocalStorage from '../../hooks/useLocalStorage'

const useCsvListScreen = () => {
  const { csvFiles } = useLocalStorage()

  return {
    csvFiles
  }
}
export default useCsvListScreen