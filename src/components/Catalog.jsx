import React, { useEffect, useState } from 'react';
import { data } from './product/data.js';
import Header from './elements/Header.jsx';
import Card from './elements/Card.jsx';
import Search from './elements/Search.jsx';
import Footer from './elements/Footer.jsx';

const Catalog = () => {
  const [products, setProducts] = useState({
    products: [],
    newProducts: []
  });

  useEffect(() => {
    setProducts(prev => {return {...prev, products: data.filter((item) => !item.isNew),  newProducts: data.filter((item) => item.isNew)}})
  }, [])

  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field) => {
      setSortField(field);
  };

  const sortedProducts = (products) => products.sort((a, b) => {
    if (sortField === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortField === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else {
      return sortOrder === 'asc' ? b.discount - a.discount :  a.discount - b.discount;
    }
  });

  return (
    <div className='container'>
      <Header />
      <div className="main-section split-section">
        <div className='wrapper'>
          <h2 className='wrapper-header'>Каталог</h2>
          {[...sortedProducts(products.newProducts), ...sortedProducts(products.products)].map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div className="side-section">
          <h2>Поиск</h2>
          <div>
            <Search setProducts={setProducts} data={data}/>
          </div>
          <div>
            <h3><i class="fa-solid fa-sort"></i>Фильтр</h3>
            <input type="radio" name="sort" value="name" onChange={(e) => handleSort(e.target.value)} /> название <br />
            <input type="radio" name="sort" value="price" onChange={(e) => handleSort(e.target.value)} /> цена <br />
            <input type="radio" name="sort" value="discount" onChange={(e) => handleSort(e.target.value)} /> скидка
          </div>
          <div>
            <h3><i class="fa-solid fa-arrow-up-short-wide"></i>Порядок</h3>
            <input type="radio" name="sortOrder" value="asc" onChange={(e) => setSortOrder(e.target.value)} /> по возрастанию <br />
            <input type="radio" name="sortOrder" value="desc" onChange={(e) => setSortOrder(e.target.value)} /> по убыванию 
          </div>
          <div>
          <a href="https://yandex.ru/maps/?um=constructor%3A313373e73223d3c93e0ae9264771bc1479a1ef101add4c453dcece2b52c77501&amp;source=constructorStatic"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A313373e73223d3c93e0ae9264771bc1479a1ef101add4c453dcece2b52c77501&amp;width=350&amp;height=400&amp;lang=ru_RU" alt="" /></a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Catalog;