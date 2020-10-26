import { Slider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function PriceFilter() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const totalMinPrice = useSelector((state) => state.totalMinPrice)
  const totalMaxPrice = useSelector((state) => state.totalMaxPrice)
  const [value, setValue] = useState([totalMinPrice, totalMaxPrice])
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setMin(newValue[0])
    setMax(newValue[1])
  }

  useEffect(() => {
    setMin(totalMinPrice)
    setMax(totalMaxPrice)
    return () => {}
  }, [totalMinPrice, totalMaxPrice])

  useEffect(() => {
    setValue([min, max])
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 })
    dispatch({ type: 'SET_MIN_PRICE', payload: min })
    dispatch({ type: 'SET_MAX_PRICE', payload: max })

    return () => {}
  }, [dispatch, min, max])

  return (
    <>
      <h3 id="price-filter">Price Filter</h3>

      <Slider
        value={value}
        min={totalMinPrice}
        max={totalMaxPrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="price-filter"
      />
      <div className="price-filter--controls">
        <div className="price-filter">
          <label htmlFor="min" className="price-filter__label">
            Min
          </label>
          <input
            type="text"
            id="min"
            className="price-filter__input"
            value={min}
            min={totalMinPrice}
            max={max}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <span className="divider" />
        <div className="price-filter">
          <label htmlFor="max" className="price-filter__label">
            Max
          </label>
          <input
            type="text"
            id="max"
            className="price-filter__input"
            value={max}
            min={min}
            max={totalMaxPrice}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default PriceFilter
