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
        <Table title="Reading Assessment Completion" students={filteredStudents.filter(s => s.stepsTaken === 3 || s.stepsTaken === 4).sort((a, b) => a.stepsTaken - b.stepsTaken)}>
          {(student) => (
              student.stepsTaken === 3 ?
              <>
                <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 4 })}>Accept</button>
                <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Decline</button>
              </> :
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 3 })}>Cancel</button>
          )}
        </Table>
      )}

      {(visibleTable === 'all' || visibleTable === 'enrollmentForms') && (
        <Table title="Enrollment Form Submissions" students={filteredStudents.filter(s => s.stepsTaken === 1 || s.stepsTaken === 2).sort((a, b) => a.stepsTaken - b.stepsTaken)}>
          {(student) => (
            student.stepsTaken === 1 ?
            <>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 2 })}>Accept</button>
              <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 0 })}>Decline</button>
            </>:
            <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 1 })}>Cancel</button>
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
          <>
            <Table key={section} title={`Enrolled Students - ${section||'Unassigned'}`} students={students} 
              sideButton={<button onClick={() => students.map(student => handleSave(student.user, { ...student, stepsTaken: 0, is_enrolled: false }))} style={{ padding: '7px', marginRight: '20px', backgroundColor: 'darkred', color: 'white', borderRadius: '5px' }}>Unenroll All Students</button>}
            >
                {(student) => <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 0, is_enrolled: false })}>Unenroll</button>}
            </Table>
          </>
        ))
      )}

      {(visibleTable === 'all' || visibleTable === 'unenrolledStudents') && (
        <Table title="Unenrolled Students" students={filteredStudents.filter(s => !s.is_enrolled)}>
          {(student) => <>
            {
              student.student_number 
              ? <button onClick={() => handleEnrollClick(student)}>Enroll Now</button>
              : <button onClick={() => handleSave(student.user, { ...student, stepsTaken: 6, is_enrolled: true })}>Enroll Now</button>
            }
            <button onClick={() => handleDelete(student.user)}>Delete</button>
          </>}
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

const Table = ({ title, students, sideButton, children }) => (
  <div style={{ paddingBottom: '42px'}}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>{title}</h2>
      {sideButton}
    </div>
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
              <div style ={{ display: 'flex', flexDirection: 'column'}}>
                <button>
                  <Link to={`/students/${student.user}`} style={{ textDecoration: 'none', color: 'black'}}>
                    Show Profile
                  </Link>
                </button>
                {children && children(student)}
              </div>
            </td>
          </tr>
        )) : <tr><td colSpan={9}>No students found</td></tr>}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  title: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
  sideButton: PropTypes.element,
  children: PropTypes.func
};

export default StudentsPage;
