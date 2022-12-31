/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import './style.less'
import useStore from '@/store'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
const HomeHotView = observer((props) => {
  const location = useLocation()
  const { CitySelected } = useStore()
  return (
    <div>
      <div className="hotproduct">
        <h3>{props.title}</h3>
        <div className="hot-container">
          <ul className="clear-fix">
            {props.data.map((element, index) => {
              return (
                <li key={index}>
                  <a href={location}>
                    <img src={element.img} alt="" />
                    <span>{CitySelected.onCommit + element.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
})

export default memo(HomeHotView)
