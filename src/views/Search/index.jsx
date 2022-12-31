/* eslint-disable react/display-name */
import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import SearchHeader from './SearchHeader'
import SearchList from './SearchList'

const Search = memo(() => {
  const params = useParams()
  return (
    <div>
      <SearchHeader />
      <SearchList search={params.keywords} />
    </div>
  )
})

export default Search
