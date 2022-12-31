/* eslint-disable react/display-name */
import React, { memo, useState, useEffect } from 'react'
import './style.less'
import { useNavigate } from 'react-router-dom'

import { useParams } from 'react-router-dom'
const SearchInput = memo(() => {
  const navigateTo = useNavigate()
  const params = useParams()
  let [keyWords, setKeyWords] = useState('')

  useEffect(() => {
    setKeyWords(params.keywords)
  }, [params])

  const keyUpHandle = (e) => {
    if (keyWords.trim().length > 0) {
      if (e.keyCode === 13) {
        navigateTo('/search/' + keyWords)
      }
    }
  }
  const changeHandle = (e) => {
    setKeyWords(e.target.value)
  }
  return (
    <input
      type="text"
      className="search-input"
      onKeyUp={keyUpHandle}
      value={keyWords || ''}
      onChange={changeHandle}
    />
  )
})

export default SearchInput
