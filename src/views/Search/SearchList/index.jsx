/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo, useState, useEffect } from 'react'
import SearchListView from '../SearchListView'
import api from '@/api'
import LoadMore from '@/components/LoadMore'
const SearchList = memo((props) => {
  const [searchData, setSearchData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    http()

    return () => {
      setSearchData([])
      setHasMore(false)
    }
  }, [props.search])

  function loadMoreHandle() {
    http()
  }

  function http() {
    api
      .search({
        search: props.search
      })
      .then((res) => {
        if (res.data.status === 200) {
          // 合并数据
          setSearchData(searchData.concat(res.data.result.data))
          setHasMore(res.data.result.hasMore)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <div>等待数据加载...</div>
      )}
      {hasMore ? (
        <LoadMore onLoadMore={loadMoreHandle} />
      ) : (
        <div>数据还没来</div>
      )}
    </div>
  )
})

export default SearchList
