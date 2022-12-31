/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from 'react'
import Item from './Item'
const SearchListView = memo((props) => {
  // eslint-disable-next-line react/prop-types
  // console.log(props.search)
  return (
    <div>
      {props.search.map((ele, index) => {
        return <Item data={ele} key={index} />
      })}
    </div>
  )
})

export default SearchListView
