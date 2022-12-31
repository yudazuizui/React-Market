/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState, useEffect } from 'react'
import DetailsView from '../DetailsView'
import api from '../../../api'
const DetailsList = memo((props) => {
  const [detailsData, setDetailsData] = useState({})

  useEffect(() => {
    api
      .details({
        id: props.id
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data)
          setDetailsData(res.data)
        }
      })
  }, [])
  return (
    <div>
      {detailsData.imgs ? (
        <DetailsView detailsData={detailsData} id={props.id} />
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  )
})

export default DetailsList
