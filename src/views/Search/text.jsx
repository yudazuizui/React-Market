/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from 'react'

const Text = memo(() => {
  const [a, setA] = useState(0)
  useEffect(() => {
    setA(2)
  })
  return <div>{(console.log(a), a)}</div>
})

export default Text
