/* eslint-disable react/display-name */
import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import DetailsList from './DetailsList'
const Details = memo(() => {
  const params = useParams()
  return (
    <div>
      <DetailsList id={params.id} />
    </div>
  )
})

export default Details
