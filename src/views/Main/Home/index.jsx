import BottomNav from '@/components/BottomNav'
import HeaderNav from '@/components/HeaderNav'
import Swiper from '@/components/Swiper'
import React, { memo } from 'react'
import HomeHotList from './HomeHotList'
import banner1 from '@/assets/images/banner1.png'
import banner2 from '@/assets/images/banner2.png'
import banner3 from '@/assets/images/banner3.png'
import banner4 from '@/assets/images/banner4.png'
import banner5 from '@/assets/images/banner5.png'
import banner6 from '@/assets/images/banner6.png'

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  const lists = [banner1, banner2, banner3, banner4, banner5, banner6]
  return (
    <div>
      <HeaderNav />
      <Swiper lists={lists} />
      <HomeHotList />
      <BottomNav />
    </div>
  )
})

export default Home
