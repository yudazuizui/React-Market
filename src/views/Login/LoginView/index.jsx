/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState } from 'react'
import './style.less'
import validator from '../../../utils/validator'
import api from '@/api'
// import validator from '../../../utils/validator'
import classnames from 'classnames'
const LoginView = memo((props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  function onSubmitHandle(e) {
    e.preventDefault()
    var { isValid, errors } = validator({
      username,
      password
    })
    if (!isValid) {
      api
        .login({
          username,
          password
        })
        .then((res) => {
          if (res.data.status === 200) {
            // 登陆成功
            setErrors({})
            props.onLoginEvent(res.data)
          } else {
            console.log('登陆失败')
          }
        })
    } else {
      setErrors(errors)
    }
  }

  function changeHandle(e) {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  return (
    <div id="login-container">
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <div
          className={classnames('input-container phone-container', {
            'input-container-error': errors.username
          })}
        >
          <i className="icon-tablet"></i>
          <input
            type="text"
            name="username"
            placeholder="用户名/手机号"
            value={username}
            onChange={changeHandle}
          />
        </div>
        <div
          className={classnames('input-container password-container', {
            'input-container-error': errors.password
          })}
        >
          <i className="icon-key"></i>
          <input
            type="password"
            name="password"
            placeholder="输入密码"
            value={password}
            onChange={changeHandle}
          />
        </div>
        <button className="btn-login">登录</button>
      </form>
    </div>
  )
})
export default LoginView
