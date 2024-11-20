import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/component.css';

// Enregistrer les éléments nécessaires pour Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);
 
function ContenuSide() {
    // Données pour le graphique circulaire
    const data = {
        labels: ['Violet', 'Vielet', 'Rouge'],
        datasets: [
            {
                label: 'Available',
                data: [300, 50, 100],
                backgroundColor: ['rgba(95,39,96,1)', 'rgb(182, 70, 184)', 'rgba(227,95,95,1)'],
                borderColor: ['rgba(95,39,96,1)', 'rgb(182, 70, 184)', 'rgba(227,95,95,1)'],
                borderWidth: 1,
            },
        ],
    };

    // Options de configuration pour le graphique circulaire
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return tooltipItem.raw + ' units';
                    },
                },
            },
        },
    };

    return (
        <div className="contenu-side p-3">
            <div className="card_side1 bg-light text-light p-3 mb-3">
                <h5>Credit Card</h5>
                <p>Valid Thru: 12/25</p>
                <p>**** **** **** 1234</p>
                <p>John Doe</p>
                <p>Balance: $5,300</p>
            </div>
            <div className="card_side bg-light text-dark p-3">
                <h5>Available</h5>
                {/* Graphique circulaire */}
                <div className="pie-chart">
                    <Pie data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default ContenuSide;
