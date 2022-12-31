/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState } from 'react'
import './style.less'
import DefaultImg from '../../../../assets/images/default.png'
import { loadImageAsync } from '../../../../utils/loadImg'
import { Link } from 'react-router-dom'
const Item = memo((props) => {
  const [currentImg, setCurrentImg] = useState(DefaultImg)

  const data = props.data

  loadImageAsync(data.img)
    .then((res) => {
      setCurrentImg(res)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <div className="list-item">
        <Link to={`/details/${data.id}`}>
          <img src={currentImg} alt="" />
          <div className="mask">
            <div className="left">
              <p>{data.title}</p>
              <p>{data.houseType}</p>
            </div>
            <div className="right">
              <div className="btn">{data.rentType}</div>
              <p dangerouslySetInnerHTML={{ __html: data.price + '元/月' }}></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
})

export default Item
