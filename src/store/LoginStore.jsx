/* eslint-disable no-const-assign */
import { makeAutoObservable } from 'mobx'
class LoginStore {
  login = {
    username: '',
    password: '',
    token: ''
  }
  constructor() {
    // 响应式处理
    makeAutoObservable(this)
  }
  setLogin = (props) => {
    login.username = props.username
    login.password = props.password
    login.token = props.token
  }
  get getLogin() {
    return login
  }
}
const login = new LoginStore()
export default login
