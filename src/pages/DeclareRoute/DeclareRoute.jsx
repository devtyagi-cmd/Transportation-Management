import React, { useState } from 'react';
import DriverSidebar from '../../components/DriverSidebar';
import Topbar from '../../components/Topbar';
import './DeclareRoute.css';

export default function DeclareRoute() {
  const [route, setRoute] = useState({
    from: '',
    to: '',
    date: '',
    capacity: ''
  });

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRoute({ ...route, [e.target.name]: e.target.value });
  };

  const declareRoute = async () => {
    if (!route.from || !route.to || !route.date || !route.capacity) {
      alert('Please fill all fields');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          driverId: localStorage.getItem('userId'),
          from: route.from.trim(),
          to: route.to.trim(),
          date: route.date,
          capacity: Number(route.capacity)
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Failed to declare route');
        return;
      }

      // show declared route in UI
      setRoutes((prev) => [...prev, data.route]);

      setRoute({ from: '', to: '', date: '', capacity: '' });
      alert('Route declared successfully 🚛');
    } catch (err) {
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <DriverSidebar />

      <div className="dashboard-main">
        <Topbar title="Declare Route" />

        <div className="fancy-sections">
          {/* FORM */}
          <div className="glass-card big">
            <h3>🚛 Declare Your Travel Route</h3>

            <div className="route-grid">
              <input
                name="from"
                placeholder="From"
                value={route.from}
                onChange={handleChange}
              />
              <input
                name="to"
                placeholder="To"
                value={route.to}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={route.date}
                onChange={handleChange}
              />
              <input
                type="number"
                name="capacity"
                placeholder="Capacity (kg)"
                value={route.capacity}
                onChange={handleChange}
              />
            </div>

            <button
              className="primary-btn wide"
              onClick={declareRoute}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Declare Route'}
            </button>
          </div>

          {/* LIST */}
          <div className="glass-card big">
            <h3>📍 Declared Routes</h3>

            {routes.length === 0 ? (
              <p className="sub-text">No routes declared yet</p>
            ) : (
              <div className="route-list">
                {routes.map((r) => (
                  <div key={r._id} className="route-item">
                    <div>
                      <strong>{r.from}</strong> → <strong>{r.to}</strong>
                      <p className="sub-text">Date: {r.date}</p>
                    </div>
                    <span className="capacity-badge">
                      {r.availableCapacity} kg
                    </span>
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