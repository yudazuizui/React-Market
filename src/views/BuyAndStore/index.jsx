/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from 'react'
import BuyAndStoreView from '@/views/BuyAndStore/BuyAndStoreView'
import './style.less'
import useStore from '@/store'
import { observer } from 'mobx-react-lite'
const BuyAndStore = observer((props) => {
  const { login, collect } = useStore()
  return (
    <div className="buy-and-store">
      <BuyAndStoreView
        id={props.id}
        user={login.getLogin}
        collects={collect.getCollect}
      />
    </div>
  )
})

export default memo(BuyAndStore)
