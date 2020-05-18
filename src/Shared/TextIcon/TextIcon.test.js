import React from 'react'
import { render } from '@testing-library/react'
import { Person } from '@material-ui/icons'
import TextIcon from './index'

const BaseRender = () => <TextIcon text="some text" icon={<Person />} />

describe('TextIcon()', () => {
  test('should render TextIcon component', () => {
    const { getByText } = render(<BaseRender />)
    expect(getByText('some text')).toBeDefined()
  })
})
