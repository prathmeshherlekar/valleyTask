import data from './data/data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Table(){
    var sumSales=0;
    var sumPer=0;

    data.forEach(element => {
        sumSales=sumSales+parseInt(data[1].Sales);
        sumPer=sumPer+parseInt(data[2].Percentage);

    });
    return(
        <div className="row">
            <table className="table table-info table-striped">
                <thead>
                <tr className="table-primary">
                    <th>Department Name</th>
                    <th>Sales</th>
                    <th>Percentage</th>
                </tr>
                </thead>
                <tbody>
                {data.map((Dept,index)=>{
                    // if(index==)
                    return (
                    <tr>
                        <td>{Dept.["Department Name"]}</td>
                        <td>{Dept.Sales}</td>
                        <td>{Dept.Percentage}</td>
                    </tr>
                    
                );
                })}
                
                <tr>
                    <td>Total</td>
                    <td>{sumSales}</td>
                    <td>{sumPer}%</td>

                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;