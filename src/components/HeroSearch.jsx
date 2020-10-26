import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'

function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  function handleChange(e) {
    setSearchTerm(e.currentTarget.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm })
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar"
        placeholder="Enter Search Term (e.g iPhone x, 128GB, A1)"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="hero__btn btn btn--primary">
        Search <ArrowForwardRoundedIcon />
      </button>
    </form>
  )
}

export default HeroSearch
