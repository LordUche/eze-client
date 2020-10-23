import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import MainContent from '../components/MainContent'

function HomePage() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('/requests/buy')
      const data = await resp.json()
      setPhones(data.data.requests)
    }
    fetchData()
    return () => {}
  }, [phones])

  return (
    <>
      <Hero />
      <MainContent phones={phones} />
    </>
  )
}

export default HomePage
