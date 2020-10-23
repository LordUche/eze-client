import React from 'react'
import { Link } from 'react-router-dom'

function CategoryMenu() {
  return (
    <>
      <h3>Categories</h3>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            iPhone
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            All
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Samsung
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            iPad
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            MacBook
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            AirPods
          </Link>
        </li>
      </ul>
    </>
  )
}

export default CategoryMenu
