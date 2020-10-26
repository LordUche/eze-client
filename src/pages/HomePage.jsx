import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import MainContent from '../components/MainContent'
import Pagination from '../components/Pagination'
import { setMinMaxPrices, setPhones } from '../store/actions'

function HomePage() {
  const searchTerm = useSelector((state) => state.searchTerm)
  const currentPage = useSelector((state) => state.currentPage)
  const storageSizes = useSelector((state) => state.storageSizes)
  const minPrice = useSelector((state) => state.minPrice)
  const maxPrice = useSelector((state) => state.maxPrice)
  const totalRequests = useSelector((state) => state.totalRequests)
  const totalMinPrice = useSelector((state) => state.totalMinPrice)
  const totalMaxPrice = useSelector((state) => state.totalMaxPrice)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      if (!totalMinPrice || !totalMaxPrice) {
        setMinMaxPrices(dispatch)
      }
      await setPhones({ dispatch, currentPage, searchTerm, minPrice, maxPrice, storageSizes, totalRequests })
    }
    fetchData()
    return () => {}
  }, [dispatch, currentPage, searchTerm, minPrice, maxPrice, storageSizes, totalRequests, totalMinPrice, totalMaxPrice])

  return (
    <>
      <Hero />
      <MainContent />
      <Pagination currentPage={currentPage} />
    </>
  )
}

export default HomePage
