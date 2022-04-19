import React from 'react';
import Card from "../components/Card";

const Category = () => {
  return (
    <div className="main">
      <div className="container">
        <h1 className="name">Category name</h1>
        <div className='cards-block'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Category;
