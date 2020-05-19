import React, { useContext, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { DataGrid, EmptySatate, LoadContext } from '../../Shared'
import { formatHistoryListRows, repoGridHeader } from './functions/dataGridSetup'
import { useSearchHistory } from '../../utils/customHook'

const SearchHistory = () => {
  const [history, setHistory] = useState([])
  const { isLoad, setIsLoad } = useContext(LoadContext)
  const [storedHistory] = useSearchHistory()

  useEffect(() => {
    const searchHistoryData = async () => {
      setIsLoad(true)
      try {
        const data = await storedHistory
        setHistory(formatHistoryListRows(data))
      } catch (error) {
        setHistory([])
      }
      setIsLoad(false)
    }
    searchHistoryData()
  }, [setIsLoad, storedHistory])

  return (
    <div data-testid="data-search-history">
      <Typography variant="h4" component="h2" gutterBottom>
        Histórico de buscas
      </Typography>
      <>
        {!isLoad && history.length >= 1 ? (
          <DataGrid columns={repoGridHeader} rows={history} />
        ) : (
          <EmptySatate text="Você ainda não realizou nenhuma busca" />
        )}
      </>
    </div>
  )
}

export default SearchHistory
