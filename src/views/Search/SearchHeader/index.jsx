/* eslint-disable react/display-name */
import React, { memo } from 'react'
import './style.less'
import SearchInput from '@/components/SearchInput'
const SearchHeader = memo(() => {
  function backHandle() {
    window.history.back()
  }

  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput />
      </div>
    </div>
  )
})

export default SearchHeader
