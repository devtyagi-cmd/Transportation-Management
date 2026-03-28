import React, { useEffect, useState } from 'react';
import ClientSidebar from '../../components/ClientSidebar';
import Topbar from '../../components/Topbar';
import './MyShipments.css';

function MyShipments() {
  const [shipments, setShipments] = useState([]);
  const clientId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/shipments/client/${clientId}`
        );
        const data = await res.json();
        setShipments(Array.isArray(data) ? data : []);
      } catch (err) {
        setShipments([]);
      }
    };

    fetchShipments();
  }, [clientId]);

  return (
    <div className="dashboard-layout">
      <ClientSidebar />

      <div className="dashboard-main">
        <Topbar title="My Shipments" />

        <div className="glass-card big">
          {shipments.length === 0 ? (
            <p className="sub-text">No shipments created yet</p>
          ) : (
            <div className="route-list">
              {shipments.map((s) => (
                <div key={s._id} className="route-item">
                  <div>
                    <strong>
                      {s.routeId?.from} → {s.routeId?.to}
                    </strong>
                    <p className="sub-text">
                      Weight: {s.weight} kg
                    </p>
                  </div>

                  <span
                    className={`status-badge ${s.status}`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyShipments;