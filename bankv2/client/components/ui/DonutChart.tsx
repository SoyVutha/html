"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DonutChart = ({amounts,labels}:{amounts:number[];labels:string[]}) => {
    const data = {
        datasets: [{
            label: 'Bank',
            data: amounts,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
        }],
        labels,
    }
  return (
    <div className="w-full">
        <Doughnut data={data} options={{cutout:'60%', plugins:{legend:{display:false}}}}/>
    </div>
  )
}

export default DonutChart