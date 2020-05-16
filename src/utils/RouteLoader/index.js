import React from 'react'
import ContentLoader from 'react-content-loader'

const LOADER_WIDTH = 230
const LOADER_HEIGHT = 430

const RouteLoader = () => {
  return (
    <div data-testid="core-routeloader" style={{ width: LOADER_WIDTH }}>
      <ContentLoader height={LOADER_HEIGHT} width={LOADER_WIDTH} speed={2}>
        <rect x="23" y="102" rx="4" ry="4" width="101" height="15" />
        <rect x="23" y="80" rx="3" ry="3" width="75" height="16" />
        <circle cx="43" cy="44" r="21" />
        <rect x="23" y="180" rx="0" ry="0" width="36" height="13" />
        <rect x="23" y="201" rx="0" ry="0" width="178" height="23" />
        <rect x="23" y="240" rx="0" ry="0" width="70" height="16" />
        <rect x="23" y="362" rx="0" ry="0" width="55" height="18" />
        <rect x="23" y="312" rx="0" ry="0" width="50" height="18" />
        <rect x="23" y="408" rx="0" ry="0" width="86" height="18" />
      </ContentLoader>
    </div>
  )
}

export default RouteLoader
