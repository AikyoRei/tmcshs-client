import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import PropTypes from 'prop-types';

const handleShowPicture = (url) => window.open(url, "_blank");

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

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

  const handleEnroll = (studentId) => console.log(`Enrolling student with ID: ${studentId}`);
  const handleUnenroll = (studentId) => console.log(`Unenrolling student with ID: ${studentId}`);
  const handleAccept = (studentId) => console.log(`Accepted student ID: ${studentId}`);
  const handleDecline = (studentId) => console.log(`Declined student ID: ${studentId}`);
  const handleDelete = (studentId) => console.log(`Deleted student ID: ${studentId}`);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='students-page'>
      <h1>Students List</h1>

      {/* Final Requirements Submission */}
      <Table title="Final Requirements Submission" students={students.filter(s => s.submitted_requirements)}>
        {(student) => <button onClick={() => handleEnroll(student.id)}>Enroll</button>}
        {(student) => <button onClick={() => handleUnenroll(student.id)}>Unenroll</button>}
      </Table>

      {/* Reading Assessment Completion */}
      <Table title="Reading Assessment Completion" students={students.filter(s => s.reading_test_done)}>
        {(student) => (
          <>
            <button onClick={() => handleAccept(student.id)}>Accept</button>
            <button onClick={() => handleDecline(student.id)}>Decline</button>
          </>
        )}
      </Table>

      {/* Enrollment Form Submissions */}
      <Table title="Enrollment Form Submissions" students={students.filter(s => s.filled_enrollment_form)}>
        {(student) => (
          <>
            <button onClick={() => handleAccept(student.id)}>Accept</button>
            <button onClick={() => handleDecline(student.id)}>Decline</button>
          </>
        )}
      </Table>

      {/* Enrolled Students */}
      <Table title="Enrolled Students" students={students.filter(s => s.is_enrolled)} />

      {/* Unenrolled Students */}
      <Table title="Unenrolled Students" students={students.filter(s => !s.is_enrolled)}>
        {(student) => <button onClick={() => handleDelete(student.id)}>Delete</button>}
      </Table>
    </div>
  );
};

const Table = ({ title, students, children }) => (
  <div>
    <h2>{title}</h2>
    <table className="students-table">
      <thead>
        <tr>
          <th>Student Number</th>
          <th>Name</th>
          <th>Grade Level</th>
          <th>Contact</th>
          <th>Email</th>
          {children && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.student_number}</td>
              <td>{`${student.first_name} ${student.middle_name || ''} ${student.last_name}`}</td>
              <td>{student.grade_level}</td>
              <td>{student.contact_number}</td>
              <td>{student.email}</td>
              {children && <td> <button onClick={() => handleShowPicture(student.profile_pic)}>Show Picture</button>{children(student)}</td>}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No students in this category</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  title: PropTypes.string,
  students: PropTypes.array,
  children: PropTypes.node.isRequired,
};

export default StudentsPage;
