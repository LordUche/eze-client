import React from 'react'
import HeroSearch from './HeroSearch'

function Hero() {
  return (
    <section className="hero">
      <div className="container row">
        <div className="hero_text col">
          <h1 className="hero__title">Shop our latest available stock here</h1>
          <HeroSearch />
        </div>
        <div className="hero__img col">
          <img src="img/gadgets.png" alt="gadgets" />
        </div>
      </div>
    </section>
  )
}

export default Hero
