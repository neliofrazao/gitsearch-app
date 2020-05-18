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
    id: 'description',
    label: 'Descrição:',
  },
  {
    id: 'language',
    label: 'Linguagem',
  },
]

export const formatRepoListRows = (result) =>
  result.map((repo, index) => ({
    id: repo.id,
    index: index + 1,
    name: repo.name,
    description: repo.description,
    language: repo.language,
  }))
