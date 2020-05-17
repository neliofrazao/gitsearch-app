import React from 'react'

const LoadContext = React.createContext({
  isLoad: false,
  setIsLoad: () => {},
})

export default LoadContext
