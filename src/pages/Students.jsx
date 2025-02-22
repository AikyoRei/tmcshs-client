import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const [visibleTables, setVisibleTables] = useState({
    finalRequirements: true,
    readingAssessment: true,
    enrollmentForms: true,
    enrolledStudents: true,
    unenrolledStudents: true,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState(null); // Store selected student for enrollment

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://tmcshs-server.vercel.app/api/students/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [token]);

  const handleSave = async (userId, formData) => {
    try {
      const response = await axios.put(`https://tmcshs-server.vercel.app/api/students/${userId}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStudents((prevStudents) =>
        prevStudents.map((student) => (student.user === userId ? response.data : student))
      );
    } catch {
      console.error("Failed to save changes.");
    }
  };

  const handleEnrollClick = (student) => {
    setModal({ ...student, academic_year: '', student_number: '', grade_level: '' });
  };

  const handleEnrollSubmit = () => {
    if (!modal.student_number || !modal.academic_year || !modal.grade_level) {
      alert("Please fill in all fields.");
      return;
    }
    handleSave(modal.user, {
      ...modal,
      student_number: parseInt(modal.student_number),
      stepsTaken: 6,
      is_enrolled: true,
    });
    setModal(null);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://tmcshs-server.vercel.app/api/students/${userId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents((prevStudents) => prevStudents.filter(student => student.user !== userId));
    } catch {
      console.error("Failed to delete student.");
    }
  };

  const toggleTableVisibility = (tableName) => {
    setVisibleTables((prev) => ({
      ...prev,
      [tableName]: !prev[tableName],
    }));
  };

  const filteredStudents = students.filter((student) =>
    `${student.first_name} ${student.middle_name || ''} ${student.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.student_number?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className='students-page'>
      <h1>Students List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, or student number..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
        style={{
          marginBottom: '10px'
        }}
      />

      {/* Table Visibility Controls */}
      <div className="table-filters">
        {Object.keys(visibleTables).map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              checked={visibleTables[key]}
              onChange={() => toggleTableVisibility(key)}
            />
            Show {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
        ))}
      </div>

      {visibleTables.finalRequirements && (
        <Table title="Final Requirements Submission" students={filteredStudents.filter(s => s.stepsTaken === 5)}>
          {(student) => (
            <>
              <button onClick={() => handleEnrollClick(student)}>Enroll</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 4, is_enrolled: false })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {visibleTables.readingAssessment && (
        <Table title="Reading Assessment Completion" students={filteredStudents.filter(s => s.stepsTaken === 3)}>
          {(student) => (
            <>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 4 })}>Accept</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {visibleTables.enrollmentForms && (
        <Table title="Enrollment Form Submissions" students={filteredStudents.filter(s => s.stepsTaken === 1)}>
          {(student) => (
            <>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Accept</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 0 })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {visibleTables.enrolledStudents && (
        <Table title="Enrolled Students" students={filteredStudents.filter(s => s.is_enrolled)} />
      )}

      {visibleTables.unenrolledStudents && (
        <Table title="Unenrolled Students" students={filteredStudents.filter(s => !s.is_enrolled)}>
          {(student) => <button onClick={() => handleDelete(student.user)}>Delete</button>}
        </Table>
      )}

      {/* Enrollment Modal */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enroll Student</h2>
            <label>Student Number/LRN</label>
            <input type="text" value={modal.student_number} onChange={(e) => setModal({ ...modal, student_number: e.target.value })} />

            <label>Academic Year</label>
            <input type="text" value={modal.academic_year} onChange={(e) => setModal({ ...modal, academic_year: e.target.value })} />

            <label>Grade Level</label>
            <input type="text" value={modal.grade_level} onChange={(e) => setModal({ ...modal, grade_level: e.target.value })} />

            <button onClick={handleEnrollSubmit}>Confirm</button>
            <button onClick={() => setModal(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Table = ({ title, students, children }) => (
  <div>
    <h2>{title}</h2>
    <table className="students-table">
      <thead>
        <tr>
          <th>Student Number/LRN</th>
          <th>Name</th>
          <th>Grade Level</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? students.map((student) => (
          <tr key={student.id}>
            <td>{student.student_number}</td>
            <td>{`${student.first_name} ${student.middle_name || ''} ${student.last_name}`}</td>
            <td>{student.grade_level}</td>
            <td>{student.contact_number}</td>
            <td>{student.email}</td>
            <td>
              <Link to={`/students/${student.user}`}>
                <button>Show Profile</button>
              </Link>
              {children && children(student)}
            </td>
          </tr>
        )) : <tr><td colSpan={6}>No students found</td></tr>}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
  children: PropTypes.func,
};

export default StudentsPage;
