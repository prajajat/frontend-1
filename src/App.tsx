import { useEffect, useState } from 'react'
 
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
      <ProductForm data={data} setData={setData} setFilterData={setFilterData}/>
      <ProductList data={filterData} setData={setData} setFilterData={setFilterData}/>
      <StatTiles data={data}/>
     
    </>
  )
}

export default App
