import useLocalStorage from '../../hooks/useLocalStorage'

const usePngListScreen = () => {
  const { pngFiles } = useLocalStorage()

  return {
    pngFiles
  }
}
export default usePngListScreen