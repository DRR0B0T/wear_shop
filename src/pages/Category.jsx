import React from 'react';
import Card from "../components/Card";
import {useQuery} from "@apollo/client";
import {GET_ALL_DATA} from "../query/allData";

const Category = () => {
  const {data, loading, error} = useQuery(GET_ALL_DATA)
  const [fetchedData, setCategoryName] = React.useState([])
  const [newData, setNewData] = React.useState([])
  const [currentCategory, setCurrentCategory] = React.useState('')


  React.useEffect(()=> {
    if(!loading) {
      setCategoryName(data.categories)
      setNewData(data.categories[0].products)
    }
    if (error) {
    return  `Error! ${error.message}`
    }
  },[data, loading, error])

  const filteredData = () => {
    const newFilteredData =  fetchedData.filter(item=> item.name === currentCategory.toLowerCase())[0].products
    setNewData(newFilteredData)
  }

  return (
    <div className="main">
      <div
        className="container">
        <select
          value={currentCategory}
          onClick={()=>filteredData()}
          defaultValue={fetchedData[0]}
          onChange={(event) => setCurrentCategory(event.target.value)}
          className='name'
        >
          {
            fetchedData.map(option =>
              <option
                key={option.name}
                >{option.name[0].toUpperCase() + option.name.slice(1)}</option>)
          }
        </select>
        <div className='cards-block'>
          <Card
            newData={newData}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
