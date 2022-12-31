/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import './style.less'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/display-name
const CityHeader = memo((props) => {
  const navigateTo = useNavigate()
  const backHandle = () => {
    // eslint-disable-next-line react/prop-types
    navigateTo(-1)
    // window.history.back()
  }
  return (
    <div>
      <div id="common-header">
        <span className="back-icon" onClick={backHandle}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
})

export default CityHeader
