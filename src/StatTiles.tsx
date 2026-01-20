function StatTiles({data})
{
    
    var totalProduct=data.length;
    var totalInventoryValue=0;
    var totalStockAlert=0
    for(let i=0;i<data.length;i++ )
    {
        totalInventoryValue+=data[i].price*data[i].stock;
        if(data[i].stock<5)totalStockAlert++;
    }
    return(
        <div>
            "Total Products {totalProduct}," "Low Stock Alert {totalStockAlert }," 
        and "Total Inventory Value {totalInventoryValue}."

        </div>
    )
}
export default StatTiles;