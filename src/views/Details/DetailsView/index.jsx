/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from 'react'
import DetailsHeader from '../../../components/CityHeader'
import Swiper from '../../../components/Swiper'
import Tabs from '../../../components/Tabs'
import Comment from '@/views/Comment'
import './style.less'
import BuyAndStore from '@/views/BuyAndStore'
const DetailsView = memo((props) => {
  let detailsData = props.detailsData
  return (
    <div>
      <DetailsHeader title={'详情页'} />
      <div>
        <Swiper lists={detailsData.imgs} />
        <Tabs>
          <div label="详情">
            <div className="detail-info">
              <h3>{detailsData.title}</h3>
              <div className="box">
                <ul>
                  <li>
                    <span>{detailsData.price} /月</span>
                    <p>租金</p>
                  </li>
                  <li>
                    <span>{detailsData.info.type}</span>
                    <p>房屋类型</p>
                  </li>
                  <li>
                    <span>{detailsData.houseType}</span>
                    <p>面积</p>
                  </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>类型：{detailsData.info.type}</p>
                  <p>朝向：{detailsData.info.orientation}</p>
                </div>
                <div className="info-list">
                  <p>楼层：{detailsData.info.level}</p>
                  <p>装修：{detailsData.info.style}</p>
                </div>
                <div className="info-list">
                  <p>年代：{detailsData.info.years}</p>
                </div>
              </div>
            </div>
            <BuyAndStore id={props.id} />
          </div>
          <div label="评价">
            <Comment id={props.id} />
          </div>
        </Tabs>
      </div>
    </div>
  )
})

export default DetailsView
