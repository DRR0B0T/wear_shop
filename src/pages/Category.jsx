import React from 'react';
import Card from "../components/Card";
import {useAllData} from "../hooks/useAllData";

const Category = () => {
  const {data, loading, error} = useAllData()
  const [newData, setNewData] = React.useState([])


  React.useEffect(() =>{
    if(!loading) {
      setNewData([...data.categories[0].products])
    }
  },[data])

  if(loading) {
    return `Loading...`
  }

  if (error) {
    return  `Error! ${error.message}`
  }

  const handleChange = ({target}) => {
    const arr = data.categories.find(item => item.name === target.value).products
    setNewData(arr)
  }

  return (
    <div className="main">
      <div
        className="container">
        <select
          onChange={handleChange}
          className='name'
        >
          {
            data.categories.map(category=>
              <option
                value={category.name}
                key={category.name}
              >{category.name[0].toUpperCase() + category.name.slice(1)}</option>
            )
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
