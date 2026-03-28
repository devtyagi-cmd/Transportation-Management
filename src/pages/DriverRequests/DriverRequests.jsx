import React, { useEffect, useState } from 'react';
import DriverSidebar from '../../components/DriverSidebar';
import Topbar from '../../components/Topbar';
import './DriverRequests.css';

function DriverRequests() {
  const [requests, setRequests] = useState([]);
  const driverId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/shipments/driver/${driverId}`
        );

        const data = await res.json();
        console.log('DRIVER REQUESTS RESPONSE 👉', data);

        // Guarantee array
        if (Array.isArray(data)) {
          setRequests(data);
        } else if (Array.isArray(data.requests)) {
          setRequests(data.requests);
        } else {
          setRequests([]);
        }
      } catch (err) {
        console.error(err);
        setRequests([]);
      }
    };

    fetchRequests();
  }, [driverId]);

  const acceptRequest = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/shipments/accept/${id}`,
        { method: 'PUT' }
      );

      setRequests(prev => prev.filter(r => r._id !== id));
      alert('Shipment accepted 🚚');
    } catch (err) {
      alert('Failed to accept request');
    }
  };

  return (
    <div className="dashboard-layout">
      <DriverSidebar />

      <div className="dashboard-main">
        <Topbar title="Shipment Requests" />

        <div className="glass-card big">
          {requests.length === 0 ? (
            <p className="sub-text">No shipment requests</p>
          ) : (
            <div className="requests-wrapper">
              {requests.map((req) => (
                <div key={req._id} className="request-card">
                  <div className="request-route">
                    <strong>
                      {req.routeId?.from} → {req.routeId?.to}
                    </strong>
                    <div className="weight-badge">
                      Weight: {req.weight} kg
                    </div>
                  </div>

                  <button
                    className="accept-btn"
                    onClick={() => acceptRequest(req._id)}
                  >
                    Accept
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default DriverRequests;