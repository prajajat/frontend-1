import { useState } from 'react'
 
import './App.css'
import Navbar from'./Navbar'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import StatTiles from './StatTiles'
function App() {
   
  const [data ,setData]=useState(JSON.parse(localStorage.getItem("data")));
  const [filterData,setFilterData]=useState(data);
  
  return (
    <>
      <Navbar setFilterData={setFilterData} data={data} />
      <ProductForm data={data} setData={setData}/>
      <ProductList data={filterData} />
      <StatTiles data={data}/>
     
    </>
  )
}

export default App
