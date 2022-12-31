import React, { memo, useEffect, useState } from 'react'

// eslint-disable-next-line react/display-name
const Text = memo(() => {
  const [a, setA] = useState(0)
  useEffect(() => {
    setA(2)
    console.log(a)
  })
  return <div>{(console.log(a), a)}</div>
})

export default Text
