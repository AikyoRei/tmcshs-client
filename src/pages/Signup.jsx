import axios from 'axios';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    birth_date: '',
    address: '',
    contact_number: '',
    guardian_name: '',
    guardian_contact: '',
    profile_pic: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [profilePicName, setProfilePicName] = useState('')

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const tempData = new FormData();
    tempData.append("file", file);
    tempData.append("upload_preset", "ml_default"); // Set your upload preset if needed

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        tempData,
      );
      setFormData({
        ...formData,
        profile_pic: response.data.secure_url
      });
      console.log(response.data.original_filename)
      setProfilePicName(response.data.original_filename)
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const data = { ...formData };
    delete data.confirmPassword; // Remove confirmPassword before sending

    try {
      const response = await fetch('https://tmcshs-server.vercel.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! Please log in.');
        setError('');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          first_name: '',
          middle_name: '',
          last_name: '',
          birth_date: '',
          address: '',
          contact_number: '',
          guardian_name: '',
          guardian_contact: '',
          profile_pic: ''
        });
        localStorage.setItem("token", result.access_token)
        window.location.href = "/"
      } else {
        setError(result.error || 'Something went wrong');
        setSuccess('');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
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

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
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

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-input"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name */}
        <div className="form-group">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input
            type="text"
            id="first_name"
            className="form-input"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Middle Name */}
        <div className="form-group">
          <label htmlFor="middle_name" className="form-label">Middle Name (Optional)</label>
          <input
            type="text"
            id="middle_name"
            className="form-input"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input
            type="text"
            id="last_name"
            className="form-input"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Birth Date */}
        <div className="form-group">
          <label htmlFor="birth_date" className="form-label">Birth Date</label>
          <input
            type="date"
            id="birth_date"
            className="form-input"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            className="form-input"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label htmlFor="contact_number" className="form-label">Contact Number</label>
          <input
            type="text"
            id="contact_number"
            className="form-input"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>

        {/* Guardian Name */}
        <div className="form-group">
          <label htmlFor="guardian_name" className="form-label">Guardian Name</label>
          <input
            type="text"
            id="guardian_name"
            className="form-input"
            name="guardian_name"
            value={formData.guardian_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Guardian Contact */}
        <div className="form-group">
          <label htmlFor="guardian_contact" className="form-label">Guardian Contact</label>
          <input
            type="text"
            id="guardian_contact"
            className="form-input"
            name="guardian_contact"
            value={formData.guardian_contact}
            onChange={handleChange}
            required
          />
        </div>
        {/* Profile picture */}
        <div className="form-group">
          <label>Profile Picture:</label>
          <div className="drag-drop-area" {...getRootProps()}>
            <input className="file-input" {...getInputProps()} />
            <p>Drag & drop a profile picture or click to select one</p>
          </div>
          {profilePicName && <p className="file-name">{profilePicName}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>

      <div className="login-link">
        <p>
          Already have an account?{' '}
          <a href="/login" className="login-text">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
