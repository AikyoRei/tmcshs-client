import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const stepStatusMap = {
  0: "Registered",
  1: "Submitted Enrollment Form",
  2: "Approved Enrollment",
  3: "Submitted Reading Assessment",
  4: "Approved Reading Assessment",
  5: "Submitted Final Requirements",
  6: "Enrolled"
};

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const [visibleTable, setVisibleTable] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState(null);

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

  const handleTableChange = (event) => {
    setVisibleTable(event.target.value);
  };

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

  const handleEnrollClick = (student) => {
    setModal({ ...student, academic_year: '', student_number: '', grade_level: '', section: '', strand: '' });
  };

  const handleEnrollSubmit = () => {
    if (!modal.student_number || !modal.academic_year || !modal.grade_level || !modal.section || !modal.strand) {
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

  const filteredStudents = students.filter((student) =>
    `${student.first_name} ${student.middle_name || ''} ${student.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.student_number?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    stepStatusMap[student.stepsTaken]?.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className='students-page'>
      <h1>Students List</h1>

      <input
        type="text"
        placeholder="Search by name, email, or student number..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
        style={{ marginBottom: '10px' }}
      />

      <label>Filter Table: </label>
      <select value={visibleTable} onChange={handleTableChange}>
        <option value="all">All Tables</option>
        <option value="finalRequirements">Final Requirements Submission</option>
        <option value="readingAssessment">Reading Assessment Completion</option>
        <option value="enrollmentForms">Enrollment Form Submissions</option>
        <option value="enrolledStudents">Enrolled Students</option>
        <option value="unenrolledStudents">Unenrolled Students</option>
      </select>

      {(visibleTable === 'all' || visibleTable === 'finalRequirements') && (
        <Table title="Final Requirements Submission" students={filteredStudents.filter(s => s.stepsTaken === 5)}>
          {(student) => (
            <>
              <button onClick={() => handleEnrollClick(student)}>Enroll</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 4, is_enrolled: false })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {(visibleTable === 'all' || visibleTable === 'readingAssessment') && (
        <Table title="Reading Assessment Completion" students={filteredStudents.filter(s => s.stepsTaken === 3)}>
          {(student) => (
            <>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 4 })}>Accept</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {(visibleTable === 'all' || visibleTable === 'enrollmentForms') && (
        <Table title="Enrollment Form Submissions" students={filteredStudents.filter(s => s.stepsTaken === 1)}>
          {(student) => (
            <>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Accept</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 0 })}>Decline</button>
            </>
          )}
        </Table>
      )}

      {(visibleTable === 'all' || visibleTable === 'enrolledStudents') && (
        Object.entries(
          filteredStudents.filter(s => s.is_enrolled).reduce((acc, student) => {
            acc[student.section] = acc[student.section] || [];
            acc[student.section].push(student);
            return acc;
          }, {})
        ).map(([section, students]) => (
          <Table key={section} title={`Enrolled Students - ${section||'Unassigned'}`} students={students} />
        ))
      )}

      {(visibleTable === 'all' || visibleTable === 'unenrolledStudents') && (
        <Table title="Unenrolled Students" students={filteredStudents.filter(s => !s.is_enrolled)}>
          {(student) => <button onClick={() => handleDelete(student.user)}>Delete</button>}
        </Table>
      )}

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enroll Student</h2>
            <label>Student Number/LRN</label>
            <input type="text" value={modal.student_number} onChange={(e) => setModal({ ...modal, student_number: e.target.value })} />

            <label>Academic Year</label>
            <input type="text" value={modal.academic_year} onChange={(e) => setModal({ ...modal, academic_year: e.target.value })} />

            <label>Strand</label>
            <input type="text" value={modal.strand} onChange={(e) => setModal({ ...modal, strand: e.target.value })} />

            <label>Grade Level</label>
            <input type="text" value={modal.grade_level} onChange={(e) => setModal({ ...modal, grade_level: e.target.value })} />

            <label>Section</label>
            <input type="text" value={modal.section} onChange={(e) => setModal({ ...modal, section: e.target.value })} />

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
          <th>Strand</th>
          <th>Grade Level</th>
          <th>Section</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? students.map((student) => (
          <tr key={student.id}>
            <td>{student.student_number}</td>
            <td style={{ wordBreak: 'break-word'}}>{`${student.first_name} ${student.middle_name || ''} ${student.last_name}`}</td>
            <td>{student.strand}</td>
            <td>{student.grade_level}</td>
            <td>{student.section}</td>
            <td>{student.contact_number}</td>
            <td>{student.email}</td>
            <td style={{ wordBreak: 'break-word'}}>{stepStatusMap[student.stepsTaken] || "Unknown"}</td>
            <td>
              <Link to={`/students/${student.user}`}>
                <button>Show Profile</button>
              </Link>
              {children && children(student)}
            </td>
          </tr>
        )) : <tr><td colSpan={8}>No students found</td></tr>}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
  children: PropTypes.func
};

export default StudentsPage;
