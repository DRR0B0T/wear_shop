import React from 'react';
import Card from "../components/Card";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "../query/currency";

const Category = () => {

  return (
    <div className="main">
      <div className="container">
        <h1 className="name">Category name</h1>
        <div className='cards-block'>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Category;
