import React, { useState } from 'react';
import Header from './elements/Header';
import { useSelector } from 'react-redux';

const Order = () => {  
  const hotel = useSelector(state => state.selectedHotel);
  const {name, price, description, discount, imageUrl} = hotel;

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        guestName,
        guestEmail,
        checkInDate,
        checkOutDate,
        numberOfGuests,
    });
    alert("Бронирование успешно оформлено!");
  };

  return (
    <div className='container'>
      <Header/>
      <div className='main-section'>
        <div className='order-card'>
          <img src={imageUrl} alt="" />
          <div className="card-info">
            <h2>{name}</h2>
            <p className="price">
              ${price*((100 - discount) / 100)} {discount > 0 ? <span style={{color: 'gray', textDecoration: "line-through"}}>{price}</span> : null} 
              <span style={{fontSize: "14px", color: "gray"}}> / в неделю</span> 
            </p>
            <p className="description"><i class="fa-solid fa-circle-info"></i>{description}</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Дата заезда:</label>
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Дата выезда:</label>
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Количество гостей:</label>
                    <input
                        type="number"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        min="1"
                        required
                    />
                </div>

                <button type="submit">Подтвердить бронирование</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;