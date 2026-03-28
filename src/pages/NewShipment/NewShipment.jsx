import React, { useState } from 'react';
import ClientSidebar from '../../components/ClientSidebar';
import Topbar from '../../components/Topbar';
import './NewShipment.css';

function NewShipment() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    weight: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitShipment = async () => {
    if (!form.from || !form.to || !form.weight) {
      alert('Please fill all fields');
      return;
    }

    alert('New Shipment page loaded successfully ✅');
  };

  return (
    <div className="dashboard-layout">
      <ClientSidebar />

      <div className="dashboard-main">
        <Topbar title="New Shipment" />

        <div className="glass-card big">
          <h3>📦 Create New Shipment</h3>

          <div className="route-grid">
            <input
              name="from"
              placeholder="Pickup location"
              value={form.from}
              onChange={handleChange}
            />
            <input
              name="to"
              placeholder="Drop location"
              value={form.to}
              onChange={handleChange}
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={form.weight}
              onChange={handleChange}
            />
          </div>

          <button className="primary-btn wide" onClick={submitShipment}>
            Create Shipment
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewShipment;