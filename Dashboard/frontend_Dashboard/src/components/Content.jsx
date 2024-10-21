import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const Content = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { label: 'Dataset 1', data: [65, 59, 80, 81, 56, 55, 40], backgroundColor: '#FF6384' },
      { label: 'Dataset 2', data: [28, 48, 40, 19, 86, 27, 90], backgroundColor: '#36A2EB' },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { label: 'My First dataset', borderColor: 'rgba(255, 99, 132, 1)', data: [12, 19, 3, 5, 2, 3], fill: false },
      { label: 'My Second dataset', borderColor: 'rgba(54, 162, 235, 1)', data: [20, 10, 5, 2, 20, 30], fill: false },
    ],
  };

  return (
    <div className="content p-4" style={{ backgroundColor: '#fff', marginLeft: '250px', minHeight: '100vh' }}>
      <h1>Analytics Dashboard</h1>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5>Total Orders</h5>
              <p>1896</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5>Clients</h5>
              <p>$568</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5>Followers</h5>
              <p>46%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Sales Report</h5>
              <Bar data={barData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5>Bandwidth Reports</h5>
              <Line data={lineData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
