import React from 'react';
import { useSelector } from "react-redux";
import Header from './elements/Header';
import Card from "./elements/Card";
import { getFavoriteHotels } from '../redux/selectors';

const CartPage = () => {
  const favoriteHotels = useSelector(getFavoriteHotels);

  return (
    <div className='container'>
      <Header/>
      <div className='main-section split-section'>
          <div className='wrapper'>
            <h2 className='wrapper-header'>Избранное</h2> 
            {
              favoriteHotels.length === 0 
              ? 
              <p>Пожалуйста, переёдите на главную страницу, чтобы добавить товары в корзину.</p> 
              : 
              favoriteHotels.map((hotel) => (
                <Card key={hotel.id} data={hotel} />
              ))
            }  
          </div>
          <div className="side-section">
            <div>
            <a href="https://yandex.ru/maps/?um=constructor%3A313373e73223d3c93e0ae9264771bc1479a1ef101add4c453dcece2b52c77501&amp;source=constructorStatic"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A313373e73223d3c93e0ae9264771bc1479a1ef101add4c453dcece2b52c77501&amp;width=350&amp;height=400&amp;lang=ru_RU" alt="" /></a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CartPage;