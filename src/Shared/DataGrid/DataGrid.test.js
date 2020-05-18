import React from 'react'
import { render } from '@testing-library/react'
import DataGrid from './index'

const columns = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'description',
    label: 'Description:',
  },
]

const rows = [
  {
    id: 1,
    name: 'User 1',
    description: 'Description',
  },
  {
    id: 2,
    name: 'User 2',
    description: 'Description',
  },
]

describe('DataGrid()', () => {
  test('should mounts  categories list', () => {
    const { getByTestId } = render(<DataGrid columns={columns} rows={rows} />)
    expect(getByTestId('data-grid')).toBeDefined()
  })

  test('should renders GridHead with data', () => {
    const { getByTestId } = render(<DataGrid columns={columns} rows={rows} />)
    const DataGridHead = getByTestId('data-grid-table-head')
    Array.from(DataGridHead.children)
      .slice(1)
      .forEach((item, i) => {
        expect(columns[i].id).toEqual('name')
        expect(columns[i].label).toEqual('Name')
      })
    expect(DataGridHead.children).toHaveLength(2)
  })

  test('should renders DataGridBody with data', () => {
    const { getByTestId } = render(<DataGrid columns={columns} rows={rows} />)
    const DataGridBody = getByTestId('data-grid-body-table-row-1')
    Array.from(DataGridBody.children)
      .slice(1)
      .forEach((item, i) => {
        expect(rows[i].id).toEqual(1)
        expect(rows[i].name).toEqual('User 1')
      })
    expect(DataGridBody.children).toHaveLength(2)
  })
})
