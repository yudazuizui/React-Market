import React, { memo, useEffect, useState } from 'react'
import CitySelect from 'react-city-select'
import api from '@/api'
import cityData from '@/Data'
import useStore from '@/store'
import { observer } from 'mobx-react-lite'

// eslint-disable-next-line react/display-name
const CityList = observer(() => {
  const { CitySelected } = useStore()
  const [citysData, setCitysData] = useState(cityData)
  const handleSelectCity = (cityData) => {
    CitySelected.onEvent(cityData.name)
    window.history.back()
  }
  useEffect(() => {
    api.getCityLists().then((res) => {
      if (res.status === 200) {
        setCitysData(res.data.result.citylist)
      }
    })
  }, [])
  return (
    <div>
      <CitySelect data={citysData} onSelectItem={handleSelectCity}></CitySelect>
    </div>
  )
})

export default memo(CityList)
