import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const applications = JSON.parse(sessionStorage.getItem("applications")) || [];
    applications.push({ name, email, profession, role, status: "under-review" });
    sessionStorage.setItem("applications", JSON.stringify(applications));
    alert("Application submitted!");
    navigate("/applicant-dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplicationForm;
