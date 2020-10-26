import React from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../store/actions'

function Pagination({ currentPage }) {
  const totalResults = useSelector((state) => state.totalResults)
  const totalPages = Math.ceil(totalResults / 20)
  const pageLinks = []
  const dispatch = useDispatch()

  function handleClick(e) {
    setCurrentPage(dispatch, parseInt(e.currentTarget.value, 10))
  }

  function makeLink(page) {
    const active = page === currentPage ? 'active' : ''
    return (
      <li key={page} className={active}>
        <button className="btn" value={page} onClick={handleClick}>
          {page}
        </button>
      </li>
    )
  }

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i += 1) {
      pageLinks.push(makeLink(i))
    }
  } else if (currentPage - 1 < 3) {
    pageLinks.push(makeLink(1), makeLink(2), makeLink(3), makeLink(4), <span key="x">...</span>, makeLink(totalPages))
  } else if (totalPages - currentPage < 3) {
    pageLinks.push(
      makeLink(1),
      <span key="x">...</span>,
      makeLink(totalPages - 3),
      makeLink(totalPages - 2),
      makeLink(totalPages - 1),
      makeLink(totalPages)
    )
  } else {
    pageLinks.push(
      makeLink(1),
      <span key="x">...</span>,
      makeLink(currentPage - 1),
      makeLink(currentPage),
      makeLink(currentPage + 1),
      <span key="y">...</span>,
      makeLink(totalPages)
    )
  }

  return (
    <>
      <div className="pagination container row">
        <button className="next__button" value={currentPage - 1} onClick={handleClick} disabled={currentPage <= 1}>
          <ArrowBackIosRoundedIcon />
        </button>

        <ul className="row">{pageLinks}</ul>

        <button
          className="prev__button"
          value={currentPage + 1}
          onClick={handleClick}
          disabled={currentPage >= totalPages}
        >
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
    </>
  )
}

export default Pagination
