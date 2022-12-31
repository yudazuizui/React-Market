/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React, { memo, useState, useEffect } from 'react'
import './style.less'
import { useNavigate } from 'react-router-dom'
import useStore from '@/store'
import { observer } from 'mobx-react-lite'
const BuyAndStoreView = observer((props) => {
  const { collect } = useStore()
  const [isCollect, setIsCollect] = useState(true)
  useEffect(() => {
    setIsCollect(isStore())
  }, [])
  const navigateTo = useNavigate()
  let collects = props.collects
  let id = props.id
  const storeHandle = () => {
    if (props.user.token) {
      if (!isStore()) {
        setIsCollect(true)
        collect.insectCollect(id)
      } else {
        setIsCollect(false)
        collect.removeCollect(id)
      }
    } else {
      navigateTo('/login')
    }
  }
  function isStore() {
    return collects.some((item) => {
      return item === id
    })
  }
  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {isCollect ? (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        ) : (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        )}
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  )
})

export default memo(BuyAndStoreView)
