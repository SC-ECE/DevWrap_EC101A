import React from 'react'
import './HeroSection.css'
import { Card } from './Card'

export const HeroSection = () => {
    return (
        <div className="totalHero">
            <div className='leftDiv'>
                <div className='intro'>
                    <span id='location'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#D62828" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        Kolkata</span>
                    <br />
                    <span id="text">
                        Discover Restaurants
                        that deliver near you
                    </span>
                    <div className="address">
                        <input type="text" name="address" id="deliveryAdd" placeholder='Enter delivery address' />
                        <div className="submit">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                                Ok</span>
                        </div>
                    </div>
                </div>
                <div className='cardContainer'>
                    <div className="cards">
                        <Card />
                    </div>
                    <div className='more'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFF" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="rightDiv">
                <img className="rightImg" src="https://static.vecteezy.com/system/resources/previews/019/607/567/non_2x/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png" alt="delivery logo" />
            </div>
        </div>
        

    )
}
