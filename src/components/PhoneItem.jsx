import React from 'react'
import toSnakeCase from '../utils/toSnakeCase'

function PhoneItem({ name, storageSize, grade, price, unlocked, requestType }) {
  return (
    <div className="item">
      <span className="item__grade">{grade}</span>
      <img className="item__img" src={`img/${toSnakeCase(name.toLowerCase())}.png`} alt="iphone xs max" />
      <span className="item__name">{name}</span>
      <span className="item__spec">
        {unlocked ? 'Unlocked' : 'Locked'} | {storageSize}
      </span>
      <span className="item__label">Unit price</span>
      <span className="item__price">${price}</span>
      <span className="item__in-stock">1500 Available</span>
      <button className="btn btn--primary">{requestType}</button>
    </div>
  )
}

export default PhoneItem
