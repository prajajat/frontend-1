import type Product from "./ProductClass";

function ProductCard({data,handleEdit,handleDelete})
{
 return (
   <div className="bg-white rounded-xl shadow-md p-5 border">
    <div>
    <label>
       Product Name -
    </label>
       {data.name}
    </div>
    <div>
    <label>
       Product category -
    </label>
       {data.category}
    </div>
    <div>
    <label>
       Price -
    </label>
       {data.price}
    </div>
    <div>
    <label>
       Product Stock -
    </label>
       {data.stock}
    </div>
    {data.stock==0&&<div>
      <span className="text-xs bg-red-100 px-2 py-1 rounded"> Out of Stock</span>
     
        </div>}
    {data.stock<=5 && data.stock>0&&<div>
        <span className="text-xs bg-yellow-100 px-2 py-1 rounded">Limited Quantity</span> 
        </div>}
    {data.price>=500&&<div>
        <span className="text-xs bg-purple-100 px-2 py-1 rounded"> Premium</span>
        </div>}
        <button className="bg-blue-500 text-white m-2" onClick={()=>handleEdit}>edit</button>
        <button className="bg-blue-500 text-white m-2" onClick={()=>handleDelete(data.id)}>delete</button>
   </div>
 )
}
export default ProductCard