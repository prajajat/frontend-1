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
    <div className="bg-white flex flex-col sm: flex-row gap-4 items-center">
      Search:{' '}
      <input
        value={query}
        onChange={(e)=>handleChange(e)}
        className="bg-blue-100"
      />
      <select onChange={(e)=>handleTypeChange(e)}  className="bg-blue-100">
          <option value="">--</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home</option>
          <option value="fashion">Fashion</option>
      </select>
    </div>
  );
}

export default Navbar