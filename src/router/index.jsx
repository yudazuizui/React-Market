// 进行类型检测
// import { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Main/Home'))
const LifeService = lazy(() => import('@/views/Main/LifeService'))
const Shop = lazy(() => import('@/views/Main/Shop/'))
const User = lazy(() => import('@/views/Main/User'))
const City = lazy(() => import('@/views/City'))
const Search = lazy(() => import('@/views/Search'))
const Details = lazy(() => import('@/views/Details'))
const Login = lazy(() => import('@/views/Login'))

// 性能优化:路由懒加载实质上是分包处理
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/life',
    element: <LifeService />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/city',
    element: <City />
  },
  {
    path: '/search/:keywords',
    element: <Search />
  },
  {
    path: '/details/:id',
    element: <Details />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Home />
  }
]
export default routes
