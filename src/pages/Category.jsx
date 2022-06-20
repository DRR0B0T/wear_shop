import React from 'react'
import Card from '../components/Card'
import Loader from '../components/ContentLoader'
import {useQuery} from '@apollo/client'
import {GET_CATEGORY} from '../hooks/useAllData'

const Category = ({categoryName}) => {
  const [name, setName] = React.useState('All')

  const {data, loading, error} = useQuery(GET_CATEGORY, {
    variables: {
      input: {
        title: `${categoryName}`
      }
    }
  })

  React.useEffect(() => {
    if (data) setName(data.category.name[0].toUpperCase() + data.category.name.slice(1))
  }, [data])

  if (error) return `Error ${error.message}`

  return (
    <div className="main">
      <div className="container">
        <h1 className='name'>{name}</h1>
        <div className='cards-block'>
          {
            !loading ? data.category.products.map(product =>
                <Card
                  key={product.id}
                  {...product} />)
              : Array(9).fill(0).map((_, index) => <Loader key={index}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Category
