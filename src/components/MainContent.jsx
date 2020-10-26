import React from 'react'
import PhonesGrid from './PhonesGrid'
import Sidebar from './Sidebar'

function MainContent() {
  return (
    <main>
      <div className="container main">
        <Sidebar />
        <PhonesGrid />
      </div>
    </main>
  )
}

export default MainContent
