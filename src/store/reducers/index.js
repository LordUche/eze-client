import * as types from '../actions/types'

const initialState = {
  phones: [],
  searchTerm: '',
  currentPage: 1,
  storageSizes: [],
  allStorageSizes: [],
  totalRequests: 0,
  totalResults: 0,
  totalMinPrice: 0,
  totalMaxPrice: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_PHONES:
      return { ...state, phones: action.payload }
    case types.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case types.SET_MIN_PRICE:
      return { ...state, minPrice: action.payload }
    case types.SET_MAX_PRICE:
      return { ...state, maxPrice: action.payload }
    case types.SET_TOTAL_MIN_PRICE:
      return { ...state, totalMinPrice: action.payload }
    case types.SET_TOTAL_MAX_PRICE:
      return { ...state, totalMaxPrice: action.payload }
    case types.SET_STORAGE_SIZES:
      return { ...state, storageSizes: action.payload }
    case types.SET_ALL_STORAGE_SIZES:
      return { ...state, allStorageSizes: action.payload }
    case types.SET_TOTAL_RESULTS:
      return { ...state, totalResults: action.payload }
    case types.SET_TOTAL_REQUESTS:
      return { ...state, totalRequests: action.payload }
    default:
      return state
  }
}

export default rootReducer
