const initialState = {
  phones: [],
  searchTerm: '',
  currentPage: 1,
  storageSizes: [],
  totalMinPrice: 0,
  totalMaxPrice: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PHONES':
      return { ...state, phones: action.payload }
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload }
    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload }
    case 'SET_TOTAL_MIN_PRICE':
      return { ...state, totalMinPrice: action.payload }
    case 'SET_TOTAL_MAX_PRICE':
      return { ...state, totalMaxPrice: action.payload }
    case 'SET_STORAGE_SIZES':
      return { ...state, storageSizes: action.payload }
    default:
      return state
  }
}

export default rootReducer
