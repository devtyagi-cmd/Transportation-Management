import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock credentials for testing
    const mockUsers = {
      client: { email: 'client@test.com', password: 'password123' },
      driver: { email: 'driver@test.com', password: 'password123' }
    };

    try {
      // Check mock credentials
      const mockUser = mockUsers[role];
      if (!mockUser || email !== mockUser.email || password !== mockUser.password) {
        alert('Invalid credentials. Try:\nClient: client@test.com / password123\nDriver: driver@test.com / password123');
        setLoading(false);
        return;
      }

      // Mock login response
      const data = {
        token: 'mock_token_' + Math.random().toString(36).substr(2, 9),
        role: role,
        user: {
          _id: 'mock_user_id_' + Math.random().toString(36).substr(2, 9),
          email: email
        }
      };

      console.log('LOGIN RESPONSE 👉', data);

      // Save auth data
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userId', data.user._id);

      // Force navigation
      if (data.role === 'driver') {
        navigate('/driver-dashboard', { replace: true });
      } else {
        navigate('/client-dashboard', { replace: true });
      }
    } catch (err) {
      console.error(err);
      alert('Login error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card glass">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="role-toggle">
            <button
              type="button"
              className={role === 'client' ? 'active' : ''}
              onClick={() => setRole('client')}
            >
              Client
            </button>
            <button
              type="button"
              className={role === 'driver' ? 'active' : ''}
              onClick={() => setRole('driver')}
            >
              Driver
            </button>
          </div>

          <button type="submit" className="primary-btn wide">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;