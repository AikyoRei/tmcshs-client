import { useContext, useEffect, useState } from "react";
import {
  FaWpforms,
  FaClipboardCheck,
  FaBookReader,
  FaCheckCircle,
  FaFileUpload
} from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import axios from "axios";

const EnrollmentProcess = () => {
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { userId, token } = useContext(AuthContext);

  const stepNumber = student.stepsTaken + 1 || 1;

  const setStepNumber = async (step) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.patch(
        `https://tmcshs-server.vercel.app/api/students/${userId}/`,
        { ...student, stepsTaken: step - 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStudent(response.data);
    } catch (error) {
      console.error("Error updating step:", error);
      setIsLoading(false); // Stop loading
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    const fetchStudent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://tmcshs-server.vercel.app/api/students/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student:", error);
        setIsLoading(false)
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudent();
  }, [token, userId]);

  const steps = [
    { id: 1, title: "Enrollment Form", icon: <FaWpforms className="enrollment-process__icon" style={{ color:  stepNumber <= 1?'darkred':'#28a745'}}/> },
    { id: 2, title: "Verification", icon: <FaCheckCircle className="enrollment-process__icon" style={{ color:  stepNumber <= 2?'darkred':'#28a745'}}/> },
    { id: 3, title: "Reading Assessment", icon: <FaBookReader className="enrollment-process__icon" style={{ color:  stepNumber <= 3?'darkred':'#28a745'}}/> },
    { id: 4, title: "Verification", icon: <FaCheckCircle className="enrollment-process__icon" style={{ color:  stepNumber <= 4?'darkred':'#28a745'}}/> },
    { id: 5, title: "Submit Requirements", icon: <FaFileUpload className="enrollment-process__icon" style={{ color:  stepNumber <= 5?'darkred':'#28a745'}}/> },
    { id: 6, title: "Verification", icon: <FaCheckCircle className="enrollment-process__icon" style={{ color:  stepNumber <= 6?'darkred':'#28a745'}}/> },
    { id: 7, title: "Enrolled", icon: <FaClipboardCheck className="enrollment-process__icon" style={{ color:  stepNumber <= 6?'darkred':'#28a745'}}/>},
  ];

  return (
    <div className="enrollment-process">
      <div className="enrollment-process__steps">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`enrollment-process__step-item`}
          >
            {step.icon}
            <p>{step.title}</p>
          </div>
        ))}
      </div>

      <div className="enrollment-process__content">
        {
            steps.find(step => step.id === stepNumber).icon
        }
        <h2 className="enrollment-process__title">Step {stepNumber}: {steps[stepNumber - 1]?.title}</h2>

        {/* Show different content per step */}
        {stepNumber === 1 && <p>Please fill out the <a href="https://forms.google.com">Enrollment Form</a>.</p>}
        {stepNumber === 2 && <p>Status: Waiting for admin approval.</p>}
        {stepNumber === 3 && <p>Take the online reading test.</p>}
        {stepNumber === 4 && <p>Status: Waiting for admin approval.</p>}
        {stepNumber === 5 && <p>Submit all requirements in a brown envelope.</p>}
        {stepNumber === 6 && <p>Status: Waiting for admin approval.</p>}
        {stepNumber === 7 && <p>You are now enrolled!</p>}

        {/* Buttons with Loading State */}
        <div className="enrollment-process__buttons">
          {(stepNumber == 2 || stepNumber == 4) && (
            <button
              className="enrollment-process__button enrollment-process__button--back"
              onClick={() => setStepNumber(stepNumber - 1)}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Back"}
            </button>
          )}

          {(stepNumber == 1 || stepNumber == 3) && (
            <button
              className="enrollment-process__button enrollment-process__button--next"
              onClick={() => setStepNumber(stepNumber + 1)}
              disabled={isLoading}
              >
              {isLoading ? "Processing..." : "Next"}
            </button>
          )}

          {stepNumber === 5 && (
            <button
              className="enrollment-process__button enrollment-process__button--finish"
              onClick={() => setStepNumber(stepNumber + 1)}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Finish"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentProcess;
