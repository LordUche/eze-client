import React from 'react'
import CategoryMenu from './CategoryMenu'
import PriceFilter from './PriceFilter'
import StorageFilter from './StorageFilter'

function Sidebar() {
  return (
    <aside className="sidebar">
      <CategoryMenu />
      <PriceFilter />
      <StorageFilter />
    </aside>
  )
}

export default Sidebar
