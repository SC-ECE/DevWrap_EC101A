import React from 'react'
import './Card.css'
import pizza from '../Images/pizza.jpg'
import pizzaIcon from '../Images/pizzaIcon.png'

export const Card = () => {
  return (
    <div className='card'>
      <figure className='card-container'>
        <img src={pizza} alt="" />
      </figure>
      <div className='button'>
        <div>
          <img src={pizzaIcon} height={22} alt="" />
          <span>Pizza</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#D62828" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
        </svg>
      </div>
    </div>
  )
}
