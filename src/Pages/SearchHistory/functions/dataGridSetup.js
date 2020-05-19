export const repoGridHeader = [
  {
    id: 'index',
    label: '#',
  },
  {
    id: 'name',
    label: 'Nome',
  },
  {
    id: 'location',
    label: 'Local:',
  },
  {
    id: 'gitUrl',
    label: 'GitHub',
  },
]

export const formatHistoryListRows = (history) =>
  history.map((user, index) => ({
    id: user.id,
    index: index + 1,
    name: user.name,
    location: user.location,
    gitUrl: user.html_url,
  }))
