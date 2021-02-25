import React from 'react';
import { Line , Bar , Pie} from 'react-chartjs-2';// Make  Chart

function Chart(){
    const linedata = {
        labels:[ 'Jan','Feb','March','April','May'],
        datasets:[
            {
                label:'Set - 1',
                data : [3, 2, 2, 1, 5],
                borderColor:['rgba(255,0,0,0.3)'],
                backgroundColor:['rgba(0,0,255,0.3)']

            },
            {
                label:'Set - 2',
                data : [5,8,4,6,3],
                borderColor:['rgba(255,255,0,0.3)'],
                backgroundColor:['rgba(0,255,0,0.3)']
            }
        ]
    }

    const piedata = {
        labels:[ 'Jan','Feb','March','April','May'],
        datasets:[
            {
                label:'Set - 1',
                data : [3, 2, 2, 1, 5],
               
                backgroundColor:['rgb(153, 153, 255)','rgb(255, 0, 102)','rgb(102, 153, 0)','rgb(153, 0, 0)','rgba(0,0,255,0.3)']
            },
        ]
    }
    return (
        <div className="chart">
            <p>Line Chart</p>
            <hr></hr>
            <Line data={linedata} />
            <p>Bar Chart</p>
            <hr></hr>
            <Bar data={linedata} />
            <p>Pie Chart</p>
            <hr></hr>
            <Pie data={piedata} />
        </div>
    )
}

export default Chart;