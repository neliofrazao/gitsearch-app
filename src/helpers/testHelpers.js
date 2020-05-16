import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import mediaQuery from 'css-mediaquery'

export const injectRouter = (
  Component,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => <Router history={history}>{Component}</Router>

export const createMatchMedia = (width) => {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  })
}
