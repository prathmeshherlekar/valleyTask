import Chart from "react-google-charts";
import JsonData from './data/data.json';


function PieChart() {
    
    var Data=[];
    const chartData = [['Department Name', 'Sales']]
    for (let i = 0; i < JsonData.length; i += 1) {
        Data=[];
        Data.push(JsonData[i]["Department Name"], JsonData[i]["Sales"])
        chartData.push(Data)
        console.log(chartData)
    }

  
    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
           
            data={chartData}
            options={{
                title: 'Department Wise Sales',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default PieChart;