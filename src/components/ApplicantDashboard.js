import React from "react";

function ApplicantDashboard() {
  const applicants = [
    { name: "Rahul Sharma", profession: "Front End Developer", status: "under-review" },
    { name: "Kanishka Negi", profession: "UI/UX Designer", status: "approved" },
    { name: "Aarav", profession: "Software Developer", status: "rejected" },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2>Applicant Dashboard</h2>
      {applicants.map((app, idx) => (
        <div key={idx} className="applicant-card">
          <div className={`status-dot status-${app.status}`}></div>
          <div>
            <strong>{app.name}</strong> - {app.profession} 
            <span style={{ marginLeft: "10px", textTransform: "capitalize" }}>
              ({app.status.replace("-", " ")})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicantDashboard;
