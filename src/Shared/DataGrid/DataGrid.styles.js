import { Table } from '@material-ui/core'
import styled from 'styled-components'

const TableGrid = styled(Table)`
  & tbody .MuiTableRow-root:nth-of-type(odd) {
    background-color: #e5e6e6;
  }
`

export default TableGrid
