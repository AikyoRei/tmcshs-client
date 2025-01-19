import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicName, setProfilePicName] = useState(null);
  console.log(profilePicName)

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Set your upload preset if needed

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        formData,
      );
      setProfilePic(response.data.secure_url);
      setProfilePicName(response.data.original_filename)
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("student_number", data.student_number);
    formData.append("first_name", data.first_name);
    formData.append("middle_name", data.middle_name || "");
    formData.append("last_name", data.last_name);
    formData.append("birth_date", data.birth_date);
    formData.append("address", data.address);
    formData.append("contact_number", data.contact_number);
    formData.append("email", data.email);
    formData.append("guardian_name", data.guardian_name);
    formData.append("guardian_contact", data.guardian_contact);
    formData.append("academic_year", data.academic_year);
    formData.append("grade_level", data.grade_level);
    formData.append("documents", data.documents);

    if (profilePic) {
      formData.append("profile_pic", profilePic);
    }

    fetch("https://tmcshs-server.vercel.app/api/students/", {
      method: "POST",
      body: formData,
    }).then(response => response.json()).then(data => {
      console.log("Student created", data);
    }).catch(error => {
      console.error("Error creating student", error);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="enroll-form">
      <div className="form-group">
        <label>Student Number:</label>
        <input
          type="number"
          className="form-input"
          {...register("student_number", { required: "Student number is required" })}
        />
        {errors.student_number && <span className="error-message">{errors.student_number.message}</span>}
      </div>

      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          className="form-input"
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && <span className="error-message">{errors.first_name.message}</span>}
      </div>

      <div className="form-group">
        <label>Middle Name:</label>
        <input
          type="text"
          className="form-input"
          {...register("middle_name")}
        />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-input"
          {...register("last_name", { required: "Last name is required" })}
        />
        {errors.last_name && <span className="error-message">{errors.last_name.message}</span>}
      </div>

      <div className="form-group">
        <label>Birth Date:</label>
        <input
          type="date"
          className="form-input"
          {...register("birth_date", { required: "Birth date is required" })}
        />
        {errors.birth_date && <span className="error-message">{errors.birth_date.message}</span>}
      </div>

      <div className="form-group">
        <label>Address:</label>
        <textarea
          className="form-input"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <span className="error-message">{errors.address.message}</span>}
      </div>

      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="text"
          className="form-input"
          {...register("contact_number", { required: "Contact number is required" })}
        />
        {errors.contact_number && <span className="error-message">{errors.contact_number.message}</span>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-input"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label>Guardian Name:</label>
        <input
          type="text"
          className="form-input"
          {...register("guardian_name", { required: "Guardian name is required" })}
        />
        {errors.guardian_name && <span className="error-message">{errors.guardian_name.message}</span>}
      </div>

      <div className="form-group">
        <label>Guardian Contact:</label>
        <input
          type="text"
          className="form-input"
          {...register("guardian_contact", { required: "Guardian contact is required" })}
        />
        {errors.guardian_contact && <span className="error-message">{errors.guardian_contact.message}</span>}
      </div>

      <div className="form-group">
        <label>Academic Year:</label>
        <input
          type="number"
          className="form-input"
          {...register("academic_year", { required: "Academic year is required" })}
        />
        {errors.academic_year && <span className="error-message">{errors.academic_year.message}</span>}
      </div>

      <div className="form-group">
        <label>Grade Level:</label>
        <input
          type="number"
          className="form-input"
          {...register("grade_level", { required: "Grade level is required" })}
        />
        {errors.grade_level && <span className="error-message">{errors.grade_level.message}</span>}
      </div>

      <div className="form-group">
        <label>Profile Picture:</label>
        <div className="drag-drop-area" {...getRootProps()}>
          <input className="file-input" {...getInputProps()} />
          <p>Drag & drop a profile picture or click to select one</p>
        </div>
        {profilePicName && <p className="file-name">{profilePicName}</p>}
      </div>

      <div className="form-group">
        <label>Documents (Google Drive Link):</label>
        <input
          type="text"
          className="form-input"
          {...register("documents", { required: "Google Drive link is required" })}
        />
        {errors.documents && <span className="error-message">{errors.documents.message}</span>}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Register;
