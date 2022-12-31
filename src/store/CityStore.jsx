/* eslint-disable prettier/prettier */
import { makeAutoObservable } from 'mobx'

class CityStore {
  city = '北京'
  constructor() {
    // 响应式处理
    makeAutoObservable(this)
  }
  onEvent = (city) => {
    // console.log(city)
    this.city = city
  }

  get onCommit() {
    return this.city
  }
}
const cityed = new CityStore()
export default cityed
