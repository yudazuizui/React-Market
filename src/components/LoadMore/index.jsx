/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useEffect, useRef, useState } from 'react'
import './style.less'
const LoadMore = memo((props) => {
  const more = useRef()
  const [loadTop, setLoadTop] = useState(10000)

  /**
   * 浅比较
   */
  useEffect(() => {
    // getBoundingClientRect
    // 视口高度
    let timer = null
    let winHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', scorllHandle)
    function scorllHandle() {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top)
        if (timer) {
          clearTimeout(timer)
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              props.onLoadMore()
            }
          }, 100)
        }
      }
    }
    return () => {
      // window.removeEventListener('scroll', scorllHandle)
      // clearTimeout(timer)
    }
  }, [loadTop])
  return (
    <div className="load" ref={more}>
      LoadMore
    </div>
  )
})

export default LoadMore
