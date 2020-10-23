import React from 'react'

function PriceFilter() {
  return (
    <>
      <h3>Price Filter</h3>
      <div>
        <div className="input">
          <label htmlFor="min">Min</label>
          <input type="number" id="min" />
        </div>
        <div className="input">
          <label htmlFor="max">Max</label>
          <input type="number" id="max" />
        </div>
      </div>
    </>
  )
}

export default PriceFilter
