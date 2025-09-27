# VERIDIA-HIRING--Platform-Frontend-Project
Created first Frontend Web Dev. Project for the Veridia.io -Hiring Platform ,Using lot of Tech soft with use of AI and github Resources. 
ChatGPT said:
Veridia Hiring Platform

A frontend hiring platform to streamline Veridia’s recruitment process. Built with React and styled for a professional look, it includes candidate registration, application submission, dashboards, and a visual HR panel.

1. Tech Stack Used
For suggestion code snippet , errorr solution -Chatgpt, BLackbox AI.
Frontend: React.js
Routing: React Router DOM
Styling: CSS, Bootstrap (optional for quick components)
State Management: React useState and sessionStorage for temporary form data
Icons/Graphics: Online image URLs for watermark and status dots
Development Environment: Node.js, npm

2. Features Implemented
Candidate Features
Candidate registration and login
Application form to submit personal details, profession, and application info
Applicant Dashboard to view application status (Under Review / Approved / Rejected)
Form submission feedback with tick icon confirmation
Admin / HR Features
Admin Dashboard to view all applications
Color-coded status indicators for quick filtering:
Orange: Under Review
Green: Approved
Red: Rejected
Distinct visual layout separate from applicant view
UI/UX Features
Watermark logo of Veridia, centered, big, medium opacity
Light blue background with subtle transparency for forms
Bold headings and styled navigation
Shadowed forms and applicant/admin cards for modern UI
Hover effects on buttons and links
Responsive layout

4. Screenshots

Landing Page / Login Page- http://localhost:3000/register.

Register Page- http://localhost:3000/register.

Applicant Dashboard-http://localhost:3000/applicant-dashboard.

Apply Page-http://localhost:3000/apply

Admin Dashboard-http://localhost:3000/admin-dashboard.


Application Form

4. How to Run Locally...
# Clone repository
git clone <your-repo-url>

# Navigate into project folder
cd veridia-hiring

# Install dependencies
npm install

# Start development server
npm start


Open http://localhost:3000
 to view it in the browser.

5. Folder Structure (Optional, but recommended)
veridia-hiring/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.js
│  │  ├─ Login.js
│  │  ├─ Register.js
│  │  ├─ ApplicationForm.js
│  │  ├─ ApplicantDashboard.js
│  │  └─ AdminDashboard.js
│  ├─ index.js
│  ├─ App.js
│  └─ index.css
├─ public/
│  └─ index.html
├─ package.json
└─ README.md
