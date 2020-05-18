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
  test('should mounts categories list', () => {
    const { container } = render(<DataGrid columns={columns} rows={rows} />)
    expect(container).toBeDefined()
  })

  test('should mounts categories list', () => {
    const { container } = render(<DataGrid columns={columns} rows={rows} />)
    expect(container).toBeDefined()
  })
})
