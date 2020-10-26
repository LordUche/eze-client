import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMinMaxPrices } from '../store/actions'
import HeroSearch from './HeroSearch'

function Hero() {
  const totalRequests = useSelector((state) => state.totalRequests)
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()
    await fetch('/api/requests', { method: 'post' })
    setMinMaxPrices(dispatch)
  }

  return (
    <section className="hero">
      <div className="container row">
        <div className="hero_text col">
          <h1 className="hero__title">Shop our latest available stock here</h1>
          {totalRequests ? (
            <HeroSearch />
          ) : (
            <form onSubmit={handleSubmit}>
              <button className="hero__btn btn btn--primary">Add Requests</button>
            </form>
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
