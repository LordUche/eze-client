import React from 'react'
import PhonesGrid from './PhonesGrid'
import Sidebar from './Sidebar'

function MainContent({ phones }) {
  return (
    <main>
      <div className="container main">
        <Sidebar />
        <PhonesGrid phones={phones} />
      </div>
    </main>
  )
}

export default MainContent
