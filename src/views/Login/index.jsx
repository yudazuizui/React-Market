/* eslint-disable react/display-name */
import useStore from '@/store'
import { observer } from 'mobx-react-lite'
import React, { memo } from 'react'
import LoginView from './LoginView'

const Login = observer(() => {
  const { login } = useStore()
  function loginHandle(user) {
    // 写入到mobx中
    login.setLogin(user)
    //本地
    localStorage.setItem('goodlive', JSON.stringify(user))
    // 回到上一级页面
    window.history.back()
  }
  return (
    <div>
      <LoginView onLoginEvent={loginHandle} />
    </div>
  )
})

export default memo(Login)
