import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import CustomSelect from './customSelect';
import CustomFilter from './CustomFilter';
import '../App.css';
import Atropos from 'atropos/react';


export const StoreCatalog = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const navigate= useNavigate() 

  const fetchProducts = () => {
    
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch(console.error);
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    let result = 0;

    if (sortOption === 'price-asc') {
      result = a.price - b.price;
    } 
    else if (sortOption === 'price-desc') {
      result = b.price - a.price;
    } 
    else if (sortOption === 'title-asc') {
      result = a.title.localeCompare(b.title);
    }
    else if (sortOption === 'title-desc') {
      result = b.title.localeCompare(a.title);
    }

    return result;
  });


  const filteredProducts = sortedProducts.filter((item) => {
    if (filterCategory === '') {
      return true;
     }
    else{
      return item.category === filterCategory;
    }
    
  });


  return (
    <>
    <div className="store-container">
      <h2>Online Store Catalog</h2>

      
      <CustomSelect value={sortOption} onChange={setSortOption} />

      
      <CustomFilter value={filterCategory} onChange={setFilterCategory} />

      
      
      <div className="store-grid">
      {filteredProducts.map((p) => (
        


          
            <div className="store-card" key={p.id} onClick={()=>{
              navigate('/product/'+p.id)
            }}>
            <img src={p.image} alt={p.title} data-atropos-offset="5" />
            <h4 data-atropos-offset="10">{p.title}</h4>
            <p className="price" data-atropos-offset="7">${p.price}</p>
            <p className="category" data-atropos-offset="3">{p.category}</p>
          </div>
        
          


       
      ))}
    </div>



    </div>
    </>
  );
};
