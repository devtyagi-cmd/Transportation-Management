import React from 'react';
import { FaBell } from 'react-icons/fa';
import './Topbar.css';
 function Topbar({ title }) {
  return (
    <div className="topbar">
      <h2>{title}</h2>

      <div className="top-actions">
        <FaBell />
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <span>User</span>
        </div>
      </div>
    </div>
  );
}
export default Topbar;