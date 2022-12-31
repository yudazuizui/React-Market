import CityHeader from '@/components/CityHeader'
import React, { memo, Suspense } from 'react'
import CityList from './CityList'
import { Spin } from 'antd'
// eslint-disable-next-line react/display-name
const City = memo(() => {
  return (
    <div>
      <Suspense fallback={<Spin></Spin>}>
        <CityHeader title={'城市选择'} />
        <CityList />
      </Suspense>
    </div>
  )
})

export default City
