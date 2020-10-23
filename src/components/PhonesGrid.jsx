import React from 'react'
import PhoneItem from './PhoneItem'

function PhonesGrid({ phones = [] }) {
  return (
    <section className="main-content">
      {phones.map((phone) => (
        <PhoneItem key={phone.id} {...phone} />
      ))}
    </section>
  )
}

export default PhonesGrid
