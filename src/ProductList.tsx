import ProductCard from "./ProductCard";

function ProductList({data})
{
  return(
    <div>
        <ul>
         {
            data.map(
                (d)=> {
                    return (
                      <li key={d.id}><ProductCard data={d} />
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