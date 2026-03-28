import { NavLink } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaCog } from 'react-icons/fa';
import './ClientSidebar.css';
function ClientSidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🚀 Smart Transport System</h2>

      <ul className="menu">
        <li>
          <NavLink to="/client-dashboard" className="sidebar-link">
            <FaHome /> <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/available-routes" className="sidebar-link">
            <FaMapMarkedAlt /> <span>Available Routes</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/my-shipments" className="sidebar-link">
            📦 <span>My Shipments</span>
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

export default ClientSidebar;