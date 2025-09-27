import React from "react";

function AdminDashboard() {
  const applications = [
    { name: "John Doe", profession: "Developer", status: "under-review" },
    { name: "Jane Smith", profession: "Designer", status: "approved" },
    { name: "Mike Johnson", profession: "Manager", status: "rejected" },
  ];

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto" }}>
      <h2>Admin Panel - Applications</h2>
      {applications.map((app, idx) => (
        <div
          key={idx}
          className="applicant-card"
          style={{ backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#e0f0ff" }}
        >
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

export default AdminDashboard;
