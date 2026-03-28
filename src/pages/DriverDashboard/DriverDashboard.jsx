import React from 'react';
import DriverSidebar from '../../components/DriverSidebar';
import Topbar from '../../components/Topbar';
import './DriverDashboard.css';

function DriverDashboard() {
  return (
    <div className="dashboard-layout">
      <DriverSidebar />

      <div className="dashboard-main">
        <Topbar title="Driver Dashboard" />

        {/* Stats */}
        <div className="fancy-stats">
          <div className="fancy-card green">
            <p>Total Trips</p>
            <h2>124</h2>
            <span>Completed</span>
          </div>

          <div className="fancy-card blue">
            <p>Active Trips</p>
            <h2>2</h2>
            <span>Ongoing</span>
          </div>

          <div className="fancy-card purple">
            <p>Total Earnings</p>
            <h2>₹56,300</h2>
            <span>This month</span>
          </div>

          <div className="fancy-card orange">
            <p>Status</p>
            <h2>Online</h2>
            <span>Available</span>
          </div>
        </div>

        {/* Sections */}
        <div className="fancy-sections">
          <div className="glass-card big">
            <h3>Assigned Trips</h3>

            <ul className="trip-list">
              <li>
                📦 Order #SH2392
                <span className="status progress">In Transit</span>
              </li>
              <li>
                📦 Order #SH2395
                <span className="status pending">Pickup Pending</span>
              </li>
            </ul>
          </div>

          <div className="glass-card">
            <h3>Availability</h3>
            <button className="primary-btn">Go Offline</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DriverDashboard;