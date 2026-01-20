import { useForm } from "react-hook-form"
import Product from "./ProductClass"

export default function ProductForm({data,setData,setFilterData}) {
  const { register, handleSubmit } = useForm({
                                              shouldUseNativeValidation: true,
                                            })
  const onSubmit = async (newData: any) => {
    var max=0;

    for(let i=0;i< data.length;i++)
    {
      if(max<data[i].id)max=data[i].id;
    }

    newData.id=max+1;
    var newStage=[...data,newData] 
   localStorage.setItem('data',JSON.stringify(newStage));
   setData(newStage);
   setFilterData(newStage);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text"
        {...register("name", {
          required: "Please enter product name.",
        })}  
      />
      <input
        {...register("category", {
          required: "Please enter Category.",
        })}  
      />
      <input type="number"
        {...register("price", {
           required: "Please enter price.",
          min: { value: 0, message: "Minimum price is 0 " },
        })}  
      />
      <input type="number"
        {...register("stock", {
           required: "Please enter stock.",
          min: { value: 0, message: "Minimum stock is 0 " },
        })}  
      />
      <input type="submit" />
    </form>
  )
}