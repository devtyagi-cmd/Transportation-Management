import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTruck, FaChartBar, FaUsers, FaCog } from 'react-icons/fa';
import './DriverSidebar.css';

function DriverSidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🚀 Smart Transport Management System</h2>

      <ul className="menu">
        <li>
          <NavLink to="/driver-dashboard" className="sidebar-link">
            <FaHome /> <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/driver-requests" className="sidebar-link">
            📦 <span>Shipment Requests</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/declare-route" className="sidebar-link">
            <span>🛣️</span> <span>Declare Route</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" className="sidebar-link">
            <FaChartBar /> <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className="sidebar-link">
            <FaUsers /> <span>Customers</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="sidebar-link">
            <FaCog /> <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default DriverSidebar;