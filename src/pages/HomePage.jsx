import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import MainContent from '../components/MainContent'
import Pagination from '../components/Pagination'

function HomePage() {
  const [totalResults, setTotalResults] = useState(0)
  const searchTerm = useSelector((state) => state.searchTerm)
  const currentPage = useSelector((state) => state.currentPage)
  const storageSizes = useSelector((state) => state.storageSizes)
  const minPrice = useSelector((state) => state.minPrice)
  const maxPrice = useSelector((state) => state.maxPrice)
  const totalMinPrice = useSelector((state) => state.totalMinPrice)
  const totalMaxPrice = useSelector((state) => state.totalMaxPrice)
  const dispatch = useDispatch()

  function setCurrentPage(page) {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
  }

  useEffect(() => {
    async function fetchData() {
      if (!totalMinPrice || !totalMaxPrice) {
        fetch('/api/requests/prices/minmax')
          .then((res) => res.json())
          .then(({ prices }) => {
            if (prices) {
              dispatch({ type: 'SET_TOTAL_MIN_PRICE', payload: prices.min })
              dispatch({ type: 'SET_TOTAL_MAX_PRICE', payload: prices.max })
            }
          })
      }

      let queryString = `q=${searchTerm}&page=${currentPage}`

      if (minPrice) queryString += `&price[gte]=${minPrice}`
      if (maxPrice) queryString += `&price[lte]=${maxPrice}`
      if (storageSizes.length) queryString += storageSizes.map((size) => `&storageSize=${size}`).join('')

      const resp = await fetch(`/api/requests?${queryString}`)
      const data = await resp.json()
      setTotalResults(data.totalCount)
      dispatch({ type: 'SET_PHONES', payload: data.requests })
    }
    fetchData()
    return () => {}
  }, [dispatch, currentPage, searchTerm, minPrice, maxPrice, storageSizes, totalMinPrice, totalMaxPrice])

  return (
    <>
      <Hero showSearch={!!totalResults} />
      <MainContent />
      <Pagination
        totalPages={Math.floor(totalResults / 20)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default HomePage
