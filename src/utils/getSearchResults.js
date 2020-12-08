const getSearchResults = (searchTerm, dataToSearch) => {
  const filtered = dataToSearch.filter(o =>
    o.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return filtered
}

export default getSearchResults
