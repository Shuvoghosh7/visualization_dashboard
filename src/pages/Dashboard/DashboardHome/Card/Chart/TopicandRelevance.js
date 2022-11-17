import React, { useEffect, useState } from 'react';
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

const TopicandRelevance = () => {
    const { data: chartData, isLoading, refetch } = useQuery('chartData', () => fetch('https://visualization-dashboard-server-production.up.railway.app/data').then(res => res.json()))
    console.log(chartData?.data)
    const data = {
        labels: chartData?.data?.map(x => x.topic),
        datasets: [{
            label: 'My First Dataset',
            data: chartData?.data?.map(x => x.relevance),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
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

            <h1 className='text-2xl text-center my-5 font-bold'>Topic & relevance</h1>
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

export default TopicandRelevance;