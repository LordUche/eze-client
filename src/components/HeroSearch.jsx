import React from 'react'

function HeroSearch() {
  return (
    <form>
      <input type="search" className="search-bar" placeholder="Enter Search Term (e.g iPhone x, 128GB, A1)" />
      <button className="hero__btn btn btn--primary">Search →</button>
    </form>
  )
}

export default HeroSearch
