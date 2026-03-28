import React, { useState } from 'react';
import ClientSidebar from '../../components/ClientSidebar';
import Topbar from '../../components/Topbar';
import './AvailableRoutes.css';

function AvailableRoutes() {
  const [destination, setDestination] = useState('');
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRoutes = async () => {
    if (!destination) {
      alert('Please enter destination city');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/routes?to=${destination}`
      );

      const data = await res.json();
      setRoutes(data);
    } catch (err) {
      alert('Failed to fetch routes');
    } finally {
      setLoading(false);
    }
  };

  const requestShipment = async (routeId) => {
    const weight = prompt('Enter shipment weight (kg)');
    if (!weight) return;

    const clientId = localStorage.getItem('userId');
    if (!clientId) {
      alert('Please login again');
      return;
    }

    try {
      const res = await fetch(
        'http://localhost:5000/api/shipments/request',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            routeId,
            clientId,
            weight: Number(weight)
          })
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Request failed');
        return;
      }

      alert('Shipment request sent 🚚');
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <div className="dashboard-layout">
      <ClientSidebar />

      <div className="dashboard-main">
        <Topbar title="Available Routes" />

        <div className="fancy-sections">
          {/* SEARCH CARD */}
          <div className="glass-card">
            <h3>🔍 Find Routes</h3>

            <input
              type="text"
              placeholder="Enter destination city (e.g. Jaipur)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <button
              className="primary-btn wide"
              onClick={searchRoutes}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search Routes'}
            </button>
          </div>

          {/* ROUTES LIST */}
          <div className="glass-card big">
            <h3>🚚 Available Driver Routes</h3>
            <p className="sub-text">
              Choose a route and request shipment instantly
            </p>

            {routes.length === 0 && !loading ? (
              <p className="sub-text">No routes found</p>
            ) : (
              <div className="route-list">
                {routes.map((route) => (
                  <div key={route._id} className="route-item">
                    <div>
                      <strong>{route.from}</strong> →{' '}
                      <strong>{route.to}</strong>
                      <p className="sub-text">
                        Date: {route.date}
                      </p>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span className="capacity-badge">
                        {route.availableCapacity} kg
                      </span>

                      <br />

                      <button
                        className="primary-btn"
                        style={{ marginTop: '10px' }}
                        onClick={() => requestShipment(route._id)}
                      >
                        Request Shipment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableRoutes;