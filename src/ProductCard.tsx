import type Product from "./ProductClass";

function ProductCard({data,handleEdit,handleDelete})
{
 return (
   <div>
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
        Out of Stock
        </div>}
    {data.stock<=5 && data.stock>0&&<div>
        Limited Quantity
        </div>}
    {data.price>=500&&<div>
        Premium
        </div>}
        <button onClick={()=>handleEdit}>edit</button>
        <button onClick={()=>handleDelete(data.id)}>delete</button>
   </div>
 )
}
export default ProductCard;