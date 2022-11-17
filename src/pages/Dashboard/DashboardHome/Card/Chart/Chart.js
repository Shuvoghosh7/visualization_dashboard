import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    BarElement,
    LineElement,


);

const Chart = () => {
    const { data: chartData, isLoading, refetch } = useQuery('chartData', () => fetch('http://localhost:5000/data').then(res => res.json()))

    const data = {
        labels: chartData?.data?.map(x => x.region),
        datasets: [{
            type: 'bar',
            label: 'Intensity',
            data: chartData?.data?.map(x => x.intensity),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],

        },
        {
            type: 'line',
            label: 'likelihood',
            data: chartData?.data?.map(x => x.likelihood),
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
    return (
        <div>
            <div>

                <h1 className='text-2xl text-center my-5 font-bold'>Region Intensity &Likelihood</h1>
                <Bar
                    data={data}
                    height={110}
                    options={options}
                />
            </div>
            <div>

            </div>

        </div>
    );
};

export default Chart;