import React from 'react'
import { useSelector } from 'react-redux'
import PhoneItem from './PhoneItem'

function PhonesGrid() {
  const phones = useSelector((state) => state.phones)
  return (
    <>
      <section className="main-content">
        {phones.map((phone) => (
          <PhoneItem key={phone._id} {...phone} />
        ))}
        {!phones.length && <p>No results found</p>}
      </section>
    </>
  )
}

export default PhonesGrid
