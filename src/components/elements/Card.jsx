import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites, setCurrentHotel } from '../../redux/actions.js';
import { isHotelInFavorites } from '../../redux/selectors.js';
import { Link } from 'react-router-dom';

const Card = ({data, setCurrentPage}) => {
    const {name, price, description, discount, imageUrl, isNew, rooms} = data;

    const dispatch = useDispatch();
    const setHotel = () => {
        dispatch(setCurrentHotel(data)); 
    };

    const isFavorite = useSelector(state => isHotelInFavorites(state, data.id));

    return ( 
        <div className="card">
            <div className="card-img">
                {
                    isNew ? 
                        <p className="new">{ isNew ? "Специальное предложение" : null } <i class="fa-solid fa-coins"></i></p> : null
                }
                {
                    discount > 0
                        ? <p className="discount">Акция: {discount}%</p> : null
                }
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-info">
                <h2 className="name">{name}</h2>
                
                <p className="price">
                    ${price*((100 - discount) / 100)} {discount > 0 ? <span style={{color: 'gray', textDecoration: "line-through"}}>{price}</span> : null} 
                    <span style={{fontSize: "14px", color: "gray"}}> / в неделю</span> 
                </p>
                
                <p className="description"><i class="fa-solid fa-circle-info"></i>{description}</p>
                <p className="rooms"><i class="fa-solid fa-house"></i>Комнат в номере: {rooms}</p>
                <button className="card-button order" onClick={() => setHotel()}>
                    <Link to={{pathname: '/order'}} style={{ color: 'inherit', textDecoration: 'none' }}>
                        Бронировать <i class="fa-regular fa-credit-card"></i>
                    </Link>
                </button>
                { 
                    isFavorite ?
                    <button className="card-button to-cart" onClick={() => {dispatch(removeFromFavorites(data.id))}}>
                        <i class="fa-solid fa-heart-crack"></i>
                    </button> : <button className="card-button to-cart" onClick={() => {dispatch(addToFavorites(data))}}>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                }
            </div>
        </div>
    )
}

export default Card;