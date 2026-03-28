import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClientSidebar from '../../components/ClientSidebar';
import Topbar from '../../components/Topbar';
import './ClientDashboard.css';

export default function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <ClientSidebar />

      <div className="dashboard-main">
        <Topbar title="Client Dashboard" />

        {/* Stats */}
        <div className="fancy-stats">
          <div className="fancy-card purple">
            <p>Total Shipments</p>
            <h2>48</h2>
            <span>All time</span>
          </div>

          <div className="fancy-card blue">
            <p>In Transit</p>
            <h2>6</h2>
            <span>Currently moving</span>
          </div>

          <div className="fancy-card green">
            <p>Delivered</p>
            <h2>39</h2>
            <span>Successful</span>
          </div>

          <div className="fancy-card orange">
            <p>Pending</p>
            <h2>3</h2>
            <span>Awaiting pickup</span>
          </div>
        </div>

        {/* Sections */}
        <div className="fancy-sections">
          <div className="glass-card big">
            <h3>Recent Shipments</h3>

            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Destination</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#SH2391</td>
                  <td>Delhi</td>
                  <td className="status success">Delivered</td>
                </tr>
                <tr>
                  <td>#SH2392</td>
                  <td>Mumbai</td>
                  <td className="status progress">In Transit</td>
                </tr>
                <tr>
                  <td>#SH2393</td>
                  <td>Pune</td>
                  <td className="status pending">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="glass-card">
            <h3>Create Shipment</h3>

            <button
              className="primary-btn"
              onClick={() => navigate('/new-shipment')}
            >
              + New Shipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}