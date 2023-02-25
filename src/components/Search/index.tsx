import React from 'react'

interface SearchProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  placeholder: string
}

function Search(props: SearchProps) {
  const { handleSearch, name, placeholder = 'Search' } = props
  return (
    <input
      type='search'
      name={name}
      onChange={handleSearch}
      placeholder={placeholder}
      autoComplete='off'
    />
  )
}

export default Search
