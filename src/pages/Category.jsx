import React from 'react'
import Card from '../components/Card'
import Loader from '../components/ContentLoader'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../hooks/useAllData'


const Category = ({ categoryName, newData }) => {
  const { data } = useQuery(GET_CATEGORY, {
    variables: {
      input: {
        title: 'tech'
      }
    }
  })
  console.log(data?.category.name)

  return (
    <div className="main">
      <div className="container">
        {/* eslint-disable-next-line react/prop-types */}
        <h1 className='name'>{categoryName[0].toUpperCase() + categoryName.slice(1)}</h1>

        <div className='cards-block'>
          {
           newData

             ? newData.map(product =>
              <Card
                key={product.id}
                {...product} />
             )
             : Array(9).fill(0).map((_, index) => <Loader key={index}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Category
