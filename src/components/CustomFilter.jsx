import React from 'react';

const CustomFilter = ({ value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default CustomFilter;
