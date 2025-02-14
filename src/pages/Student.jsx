import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const StudentPage = () => {
  const { userId } = useParams();
  const [student, setStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://tmcshs-server.vercel.app/api/students/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudent(response.data);
        setFormData(response.data); // Initialize form with student data
      } catch {
        setError('Failed to fetch student data. Please try again later.');
      }
    };
    fetchStudent();
  }, [token, userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`https://tmcshs-server.vercel.app/api/students/${userId}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudent(formData);
      setEditMode(false);
    } catch {
      setError('Failed to update student data. Please try again.');
    }
  };

  if (error) return <p className="error-message">{error}</p>;
  if (!student) return <p>Loading...</p>;

  return (
    <div className="student-container">
      <div className="student-card">
        <img src={student.profile_pic} alt="Profile" className="profile-pic" />

        <div className="student-info">
          {editMode ? (
            <>
              <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="edit-input" />
              <input type="text" name="middle_name" value={formData.middle_name || ''} onChange={handleChange} className="edit-input" />
              <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="edit-input" />
            </>
          ) : (
            <h2>{`${student.first_name} ${student.middle_name ? student.middle_name + ' ' : ''}${student.last_name}`}</h2>
          )}

          <div className="student-details">
            <label>Email:</label>
            {editMode ? (
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.email}</p>
            )}

            <label>Birth Date:</label>
            {editMode ? (
              <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.birth_date}</p>
            )}

            <label>Address:</label>
            {editMode ? (
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.address}</p>
            )}

            <label>Contact:</label>
            {editMode ? (
              <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.contact_number}</p>
            )}

            <label>Guardian:</label>
            {editMode ? (
              <input type="text" name="guardian_name" value={formData.guardian_name} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.guardian_name}</p>
            )}

            <label>Guardian Contact:</label>
            {editMode ? (
              <input type="text" name="guardian_contact" value={formData.guardian_contact} onChange={handleChange} className="edit-input" />
            ) : (
              <p>{student.guardian_contact}</p>
            )}
          </div>

          <div className="button-container">
            {editMode ? (
              <>
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={() => setEditMode(false)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)} style={{ backgroundColor: 'darkred'}} className="edit-btn">Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
