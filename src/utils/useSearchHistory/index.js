import { useCallback } from 'react'
import useLocalStorage from '../useLocalStorage'

const useSearchHistory = () => {
  const [storedHistory, setHistory] = useLocalStorage('history', [])
  const setHistoryValue = useCallback(
    (value) => {
      const getStoredHistory = storedHistory
      getStoredHistory.unshift(value)

      if (getStoredHistory.length >= 5) {
        const removeHistory = getStoredHistory.filter((card, index) => index !== 5)
        setHistory(removeHistory)
      } else {
        setHistory(getStoredHistory)
      }
    },
    [setHistory, storedHistory],
  )

  return [storedHistory, setHistoryValue]
}

export default useSearchHistory
