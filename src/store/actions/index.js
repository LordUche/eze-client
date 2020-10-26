import * as types from './types'

export const setMinMaxPrices = (dispatch) => {
  fetch('/api/requests/prices/minmax')
    .then((res) => res.json())
    .then(({ prices }) => {
      if (prices) {
        dispatch({ type: types.SET_TOTAL_MIN_PRICE, payload: prices.min })
        dispatch({ type: types.SET_TOTAL_MAX_PRICE, payload: prices.max })
      }
    })
}

export const setAllStorageSizes = (dispatch) => {
  fetch('/api/requests/sizes')
    .then((res) => res.json())
    .then(({ storageSizes }) => {
      dispatch({
        type: types.SET_ALL_STORAGE_SIZES,
        payload: storageSizes.sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
      })
    })
}

export const setCurrentPage = (dispatch, payload) => dispatch({ type: types.SET_CURRENT_PAGE, payload })

export const setPhones = async ({
  dispatch,
  currentPage,
  searchTerm,
  minPrice,
  maxPrice,
  storageSizes,
  totalRequests
}) => {
  let queryString = `q=${searchTerm}&page=${currentPage}`

  if (minPrice) queryString += `&price[gte]=${minPrice}`
  if (maxPrice) queryString += `&price[lte]=${maxPrice}`
  if (storageSizes.length) queryString += storageSizes.map((size) => `&storageSize=${size}`).join('')

  const resp = await fetch(`/api/requests?${queryString}`)
  const data = await resp.json()
  dispatch({ type: types.SET_TOTAL_RESULTS, payload: data.totalCount })
  dispatch({ type: types.SET_PHONES, payload: data.requests })
  if (!totalRequests) {
    dispatch({ type: types.SET_TOTAL_REQUESTS, payload: data.totalCount })
    setAllStorageSizes(dispatch)
  }
}
