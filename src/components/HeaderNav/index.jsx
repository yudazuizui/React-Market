import React, { memo } from 'react'
import './style.less'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import useStore from '@/store'
import SearchInput from '../SearchInput'
// eslint-disable-next-line react/display-name
const HeaderNav = observer(() => {
  const { CitySelected } = useStore()
  return (
    <div id="home-header" className="clear-fix">
      <div className="home-header-left float-left">
        <Link to="/city">
          <span>{CitySelected.onCommit}</span>
          <i className="icon-angle-down"></i>
        </Link>
      </div>
      <div className="home-header-right float-right">
        <i className="iconfont icon-car"></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <SearchInput />
        </div>
      </div>
    </div>
  )
})

export default memo(HeaderNav)
