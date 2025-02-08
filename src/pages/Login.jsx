import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await fetch('https://tmcshs-server.vercel.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        setError('');

        // If the backend returns a token or session ID in the response body
        // You can store it in localStorage for further use
        const token = result.access_token || '';  // Adjust based on what your backend returns
        if (token) {
          localStorage.setItem('token', token);  // Store the token in localStorage
          window.location.href = "/"
        }

        // Redirect to another page or update your application state
        // For example, window.location.href = '/dashboard' or using React Router

      } else {
        setError(result.error || 'Something went wrong');
        setSuccess('');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      <div className="signup-link">
        <p>
          Don&apos;t have an account?{' '}
          <a href="/signup" className="signup-text">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
