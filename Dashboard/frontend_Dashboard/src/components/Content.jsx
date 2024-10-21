// src/components/Content.js
import React from 'react';

const Content = () => {
  return (
    <div className="content p-4" style={{ marginLeft: '250px' }}>
      <h1>Dashboard Overview</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Earnings</h5>
              <p className="card-text">$12,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <p className="card-text">200</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
