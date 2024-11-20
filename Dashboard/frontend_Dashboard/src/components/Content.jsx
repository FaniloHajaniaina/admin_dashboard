// src/components/Content.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import '../Styles/component.css';

// Configuration nécessaire pour Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Content() {
    // Données pour le graphique
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Income',
                data: [12000, 15000, 14000, 17000, 16000, 20000],
                backgroundColor: 'rgba(95,39,96,1)',
                borderColor: 'rgba(95,39,96,1)',
                borderWidth: 1,
                borderRadius: 10,
            },
            {
                label: 'Expenses',
                data: [7000, 8000, 6500, 9000, 8500, 11000],
                backgroundColor: 'rgba(227,95,95,1)',
                borderColor: 'rgba(227,95,95,1)',
                borderWidth: 1,
                borderRadius: 10,
            },
        ],
    };

    // Options de configuration pour le graphique
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Revenue and Expenses',
            },
        },
    };

    return (
        <div className="content p-3">
            <div className="chart bg-light text-light p-4 mb-3">
                <Bar data={data} options={options} />
            </div>
            <div className="d-flex justify-content-between">
                <div className="card1 bg-light text-light p-3">
                    <p>Income</p>
                    <h5>$15,200</h5>
                </div>
                <div className="card2 bg-light text-light p-3">
                    <p>Expenses</p>
                    <h5>$6,700</h5>
                </div>
            </div>
        </div>
    );
}

export default Content;
