/* eslint-disable prettier/prettier */
import { makeAutoObservable } from 'mobx'
class CollectStore {
  collect = []
  constructor() {
    // 响应式处理
    makeAutoObservable(this)
  }
  insectCollect = (item) => {
    this.collect.push(item)
  }
  removeCollect = (id) => {
    return (this.collect = this.collect.filter((item) => {
      return item !== id
    }))
  }
  get getCollect() {
    // 记得加this！！！
    return this.collect
  }
}
const collect = new CollectStore()
export default collect
