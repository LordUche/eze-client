import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../store/actions'

function StorageFilter() {
  const storageSizes = useSelector((state) => state.storageSizes)
  const sizes = useSelector((state) => state.allStorageSizes)
  const dispatch = useDispatch()

  function handleSelect(e) {
    dispatch({
      type: 'SET_STORAGE_SIZES',
      payload: e.target.checked
        ? [...storageSizes, e.target.value]
        : storageSizes.filter((size) => size !== e.target.value)
    })
    setCurrentPage(dispatch, 1)
  }

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
