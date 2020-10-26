import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function StorageFilter() {
  const [sizes, setSizes] = useState([])
  const storageSizes = useSelector((state) => state.storageSizes)
  const dispatch = useDispatch()

  function handleSelect(e) {
    dispatch({
      type: 'SET_STORAGE_SIZES',
      payload: e.target.checked
        ? [...storageSizes, e.target.value]
        : storageSizes.filter((size) => size !== e.target.value)
    })
  }

  useEffect(() => {
    fetch('/api/requests/sizes')
      .then((res) => res.json())
      .then(({ storageSizes }) => {
        setSizes(storageSizes.sort((a, b) => parseInt(a, 10) - parseInt(b, 10)))
      })
    return () => {}
  }, [])
  return (
    <>
      <h3>Storage</h3>
      <form onChange={handleSelect}>
        {sizes.map((size) => {
          return (
            <div key={size}>
              <input type="checkbox" value={size} id={size} />
              <label htmlFor={size}> {size}</label>
            </div>
          )
        })}
      </form>
    </>
  )
}

export default StorageFilter
