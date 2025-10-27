import React from 'react';

const CustomSelect = ({ value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price (Ascending)</option>
        <option value="price-desc">Price (Descending)</option>
        <option value="title-asc">Name(A-Z)</option>
        <option value="title-desc">Name(Z–A)</option>
      </select>
    </div>
  );
};

export default CustomSelect;
