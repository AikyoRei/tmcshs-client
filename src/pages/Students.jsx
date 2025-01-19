import { useEffect, useState } from 'react';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://tmcshs-server.vercel.app/api/students/");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleEnroll = (studentId) => {
    // Logic for enrolling a student
    console.log(`Enrolling student with ID: ${studentId}`);
  };

  const handleUnenroll = (studentId) => {
    // Logic for unenrolling a student
    console.log(`Unenrolling student with ID: ${studentId}`);
  };

  const handleShowPicture = (profilePicUrl) => {
    window.open(profilePicUrl, "_blank");
  };

  const handleShowDocuments = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  // Separate students into enrolled and not enrolled
  const enrolledStudents = students.filter((student) => student.is_enrolled);
  const notEnrolledStudents = students.filter((student) => !student.is_enrolled);

  return (
    <div className='students-page'>
      <h1>Students List</h1>

      {/* Unenrolled Students Table */}
      <div>
        <h2>Unenrolled Students</h2>
        <table className="students-table">
          <thead>
            <tr>
              <th>Student Number</th>
              <th>Name</th>
              <th>Grade Level</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notEnrolledStudents.length > 0 ? (
              notEnrolledStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.student_number}</td>
                  <td>{student.first_name} {student.middle_name} {student.last_name}</td>
                  <td>{student.grade_level}</td>
                  <td>{student.contact_number}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => handleShowPicture(student.profile_pic)}>Show Picture</button>
                    <button onClick={() => handleShowDocuments(student.documents)}>Show Documents</button>
                    <button onClick={() => handleEnroll(student.id)}>Enroll</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No unenrolled students</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Enrolled Students Table */}
      <div>
        <h2>Enrolled Students</h2>
        <table className="students-table">
          <thead>
            <tr>
              <th>Student Number</th>
              <th>Name</th>
              <th>Grade Level</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.length > 0 ? (
              enrolledStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.student_number}</td>
                  <td>{student.first_name} {student.middle_name} {student.last_name}</td>
                  <td>{student.grade_level}</td>
                  <td>{student.contact_number}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => handleShowPicture(student.profile_pic)}>Show Picture</button>
                    <button onClick={() => handleShowDocuments(student.documents)}>Show Documents</button>
                    <button onClick={() => handleUnenroll(student.id)}>Unenroll</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No enrolled students</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default StudentsPage;
