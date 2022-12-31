import api from '@/api'
import React, { memo, useState, useEffect } from 'react'
import HomeHotView from '../HomeHotView'
import useStore from '@/store'
import { observer } from 'mobx-react-lite'
// eslint-disable-next-line react/display-name
const HomeHotList = observer(() => {
  const { CitySelected } = useStore()
  const [hot1List, setHot1List] = useState([])
  const [hot2List, setHot2List] = useState([])
  const [city, setCity] = useState(CitySelected.onCommit)
  useEffect(() => {
    api
      .getHomtHot1({
        cityName: CitySelected.onCommit
      })
      .then((res) => {
        if (res.data.status === 200) {
          setHot1List(res.data.result)
          setCity(res.data.city)
        }
      })
  }, [])
  useEffect(() => {
    api
      .getHomtHot2({
        cityName: CitySelected.onCommit
      })
      .then((res) => {
        if (res.data.status === 200) {
          setHot2List(res.data.result)
          setCity(res.data.city)
        }
      })
  }, [])
  return (
    <div>
      {hot1List.length > 0 ? (
        <HomeHotView data={hot1List} city={city} title={'热门商品'} />
      ) : (
        <div>等待数据加载</div>
      )}
      {hot2List.length > 0 ? (
        <HomeHotView data={hot2List} city={city} title={'新品推荐'} />
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  )
})

export default memo(HomeHotList)
