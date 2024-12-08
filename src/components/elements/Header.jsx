import React from 'react';
import { Link } from "react-router-dom";
import { handleNext, handlePrevious } from "../../utils/utils";


const Header = () => {
	return (
		<div className='header'>
      <div>
        <button className="nav-button" onClick={handlePrevious}><i class="fa-solid fa-left-long"></i></button>
        <button className="nav-button" onClick={handleNext}><i class="fa-solid fa-right-long"></i></button>
      </div>
      <h1>Hotels.by - Бронирование отелей Онлайн</h1>
      <div>
        <button className='nav-button'>
          <Link to="/" style={{ color: 'inherit' }}>
            <i class="fa-solid fa-house"></i>
          </Link>
        </button>
        <button className='nav-button'>
          <Link to="/cart" style={{ color: 'inherit' }}>
            <i class="fa-solid fa-heart"></i>
          </Link>
        </button>
      </div>
    </div>
	)
}

export default Header;