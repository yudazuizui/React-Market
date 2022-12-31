import React from 'react'
import cityed from './CityStore'
import login from './LoginStore'
import collect from './CollectStore'
class RootStore {
  constructor() {
    this.CitySelected = cityed
    this.collect = collect
    this.login = login
  }
}
const rootStore = new RootStore()

// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)
// useStore() =>  rootStore  { counterStore, taskStore }

export default useStore
