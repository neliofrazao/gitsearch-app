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
})
