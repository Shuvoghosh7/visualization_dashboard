import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    BarElement,
    LineElement,


);

const LineChart = () => {
    const { data: chartData, isLoading, refetch } = useQuery('chartData', () => fetch('http://localhost:5000/data').then(res => res.json()))
    console.log(chartData?.data)
    const data = {
        labels: chartData?.data?.map(x => x.pestle),
        datasets: [
        {
            type: 'line',
            label: 'likelihood',
            data: chartData?.data?.map(x => x.intensity),
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        },
        
    ]
    }

    var options = {
        responsive: true,
        maintainAspectRation: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: { fontSize: 26 }
        }
    }

    var options = {
        responsive: true,
        maintainAspectRation: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: { fontSize: 26 }
        }
    }

    return (
        <div>
            <div>

                <h1 className='text-2xl text-center my-5'>Pestle and intensity</h1>
                <Bar
                    data={data}
                    height={100}
                    options={options}
                />
            </div>
            <div>

            </div>

        </div>
    );
};

export default LineChart;