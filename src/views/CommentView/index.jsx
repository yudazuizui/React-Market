/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from 'react'
import './style.less'
import Item from './Item'
const CommentView = memo((props) => {
  const data = props.data
  return (
    <div className="comment-list">
      <ul>
        {data.map((ele, index) => {
          return <Item data={ele} key={index}></Item>
        })}
      </ul>
    </div>
  )
})

export default CommentView
