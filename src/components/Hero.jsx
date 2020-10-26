import React from 'react'
import { useDispatch } from 'react-redux'
import HeroSearch from './HeroSearch'

function Hero({ showSearch }) {
  const dispatch = useDispatch()

  async function handleClick(e) {
    await fetch('/api/requests', { method: 'post' })
    fetch('/api/requests/prices/minmax')
      .then((res) => res.json())
      .then(({ prices }) => {
        if (prices) {
          dispatch({ type: 'SET_TOTAL_MIN_PRICE', payload: prices.min })
          dispatch({ type: 'SET_TOTAL_MAX_PRICE', payload: prices.max })
        }
      })
  }

  return (
    <section className="hero">
      <div className="container row">
        <div className="hero_text col">
          <h1 className="hero__title">Shop our latest available stock here</h1>
          {showSearch ? (
            <HeroSearch />
          ) : (
            <button onClick={handleClick} className="hero__btn btn btn--primary">
              Add Requests
            </button>
          )}
        </div>
        <div className="hero__img col">
          <img src="img/gadgets.png" alt="gadgets" />
        </div>
      </div>
    </section>
  )
}

export default Hero
