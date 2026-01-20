import ProductCard from "./ProductCard";

function ProductList({data,setData,setFilterData})
{ console.log('re render');
  console.log(data);
  const handleDelete =(id)=>{ 
    var newData=data.filter(d=>d.id!==id); 
    localStorage.setItem('data',JSON.stringify(newData));
    setData(newData);
    setFilterData(newData);
  }
  return(
    <div>
        <ul>
         {
            data.map(
                (d)=> {
                    return (
                      <li key={d.id}><ProductCard data={d} setData={setData} handleDelete={handleDelete}/>
                      </li>
                      );
                      }
                   )
         }
        </ul>
    </div>
  )
}
export default ProductList;