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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg: grid-cols-3 gap-6 p-4">
            <div className="bg-blue-50 rounded-lg"> 
            Total Products : {totalProduct}
            </div>
             <div className="bg-yellow-50 rounded-lg">Low Stock Alert : {totalStockAlert }
              </div>
              <div className="bg-green-50 rounded-lg">
              Total Inventory Value : {totalInventoryValue}
            </div>

        </div>
    )
}
export default StatTiles;