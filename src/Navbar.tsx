import { useState } from "react"

function Navbar({setFilterData,data}) {
   const [query,setQuery]=useState('');

   function handleChange(e) {
        setQuery(e.target.value);
       
        var newFilterData= data.filter(d =>
                                      d.name.split(' ').some(word =>
                                        word.toLowerCase().startsWith(e.target.value)
                                      ));
        setFilterData(newFilterData);
      }
   function handleTypeChange(e) {
        var newFilterData= data.filter(d =>
                                      d.category.split(' ').some(word =>
                                        word.toLowerCase().startsWith(e.target.value)
                                      ));
        setFilterData(newFilterData); 
   }
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={(e)=>handleChange(e)}
      />
      <select onChange={(e)=>handleTypeChange(e)}>
          <option value="">--</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home</option>
          <option value="fashion">Fashion</option>
      </select>
    </label>
  );
}

export default Navbar