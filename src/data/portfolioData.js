export const personalInfo = {
  name: "Amit Nagpure",
  role: "MERN Stack & Industrial IoT Developer",
  experienceYears: 3,
  tagline: "Bridging the gap between physical machinery and beautiful, real-time web applications.",
  resumeUrl: "/amit_nagpure_resume14.pdf", // Add your resume file name here
  linkedinUrl: "https://www.linkedin.com/in/amit-nagpure-4944b025a",
  githubUrl: "https://github.com/amit45555",
  email: "amitnagpure555@gmail.com",
  phone: "+91 8668263440", // Placeholder for phone
  location: "Pune, Maharashtra, India",
  summary: "Dynamic and results-driven Frontend & MERN Stack Developer with 3+ years of experience designing, building, and deploying mission-critical industrial monitoring dashboards and real-time data visualization systems. Specializes in building responsive React.js frontends integrated with Node.js/Express.js, real-time protocols like OPCUA, and high-frequency WebSocket channels. Proven track record of delivering resilient enterprise solutions for industry giants like company, ensuring zero-latency monitoring and reliable deployment under IIS and PM2."
};

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "+", label: "Industrial Projects" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 200, suffix: "k+", label: "Real-time Signals/Hr" }
];

export const skillCategories = [
  {
    title: "Frontend Core",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "Redux Toolkit", level: 85 },
      { name: "HTML5 / CSS3", level: 90 }
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Socket.io (WebSockets)", level: 92 },
      { name: "REST APIs", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "SQL / Relational DBs", level: 80 }
    ]
  },
  {
    title: "Industrial & Deployments",
    icon: "Cpu",
    skills: [
      { name: "OPCUA Integration", level: 90 },
      { name: "IIS (Windows Server)", level: 88 },
      { name: "PM2 Process Manager", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Git & Version Control", level: 92 },
      { name: "Jenkins (CI/CD)", level: 70 }
    ]
  }
];

export const experienceTimeline = [
  
  {
    id: 4,
    role: "Software Engineer (Client Project)",
    company: "Cognizant",
    duration: "May 2023 - Present",
    description: "I am a Software Engineer currently working as a client. Fullstack developer building real-time industrial monitoring systems using React, Node.js, OPC UA, and WebSockets.",
    bullets: [
      "Built low-latency dashboards, REST APIs, and scalable enterprise applications for manufacturing environments.",
      "Integrated real-time telemetry using OPC UA and WebSockets for operational visibility.",
      "Collaborated with stakeholders to deliver high-performance industrial monitoring solutions."
    ]
  },
 
];

export const projectsList = [
  {
    id: 1,
    title: "Station Monitoring Dashboard",
    client: "Industrial Manufacturing Client",
    category: "Real-Time Dashboard",
    shortDesc: "Enterprise MERN platform mapping real-time operational logs, cycle times, and hardware metrics for assembly line stations.",
    longDesc: "This is a mission-critical industrial web interface designed specifically for factory floor operators and plant managers. It displays live status flags, cycle-time deviations, and station statuses across multiple manufacturing bays. Powered by an OPCUA-to-WebSocket bridge, it processes massive real-time telemetry streams, allowing supervisors to preempt bottlenecking.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS", "OPCUA"],
    stats: { "Throttling Rate": "80ms", "Daily Packets": "4.8M", "Visual Uptime": "100%" },
    features: [
      "Live layout visualizer showing active station statuses in real-time.",
      "Interactive cycle-time graph showcasing deviation from target limits.",
      "Intelligent alarm overlay reporting sensors triggers instantly.",
      "Responsive layout tested on rough terminal displays on factory floors."
    ]
  },
  {
    id: 2,
    title: "Pressure Monitoring System",
    client: "Industrial Systems",
    category: "Telemetry Analytics",
    shortDesc: "Real-time pneumatic & hydraulic pressure tracker and chart dashboard engineered to detect operational anomalies.",
    longDesc: "Built to replace legacy standalone telemetry gauges, this Web-based monitoring application acts as an early warning alert system for pneumatic pressure loops. It records pressure variations at microsecond intervals, displays interactive historical regression charts, and generates instant reports.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Socket.io", "MongoDB", "Framer Motion"],
    stats: { "Avg Latency": "32ms", "Failure Preemption": "94%", "Downtime Cut": "14%" },
    features: [
      "Custom vector-rendered pressure gauges with high-contrast color indicators.",
      "Live historical timeline charts supporting zoom, drag, and pan capabilities.",
      "Dynamic thresholds editor with sound alert triggers and SMS warning triggers.",
      "Auto-recovery logging mechanisms capturing off-line edge Gateway buffers."
    ]
  },
  {
    id: 3,
    title: "Pallet Monitoring Dashboard",
    client: "Logistics Division",
    category: "Industrial Asset Tracking",
    shortDesc: "Interactive warehouse load layout tracking and grid logistics dashboard representing storage bay occupancy.",
    longDesc: "An active warehouse asset visualizer mapping physical storage containers and heavy pallet placements across virtualized 2D grid grids. The system is designed to streamline logistics routing and loading times.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "SQL Server", "PM2 Process Manager"],
    stats: { "Loading Optimization": "22%", "Capacity Map": "Real-time", "PM2 Clusters": "4" },
    features: [
      "Responsive 2D grid map rendering real-time shelf occupancies.",
      "Drag and drop inventory updates synced with SQL database transactional logs.",
      "Detailed pallet metadata viewer (weight, content, dispatch timestamp).",
      "Robust PM2 failover cluster settings enabling 100% active operational cycles."
    ]
  },
  {
    id: 4,
    title: "PharmaCorp Access Management System",
    client: "PharmaCorp",
    category: "Access Management / Enterprise",
    shortDesc: "Full-stack RBAC access management system for a pharmaceutical enterprise with secure workflows and audit-ready reporting.",
    longDesc: "Developed a full-stack access management system for a pharmaceutical enterprise to manage users, roles, departments, plants, vendors, and workflows. Implemented secure role-based access control (RBAC) with JWT-based authentication and authorization. Built responsive dashboards for Super Admin, Admin, and Approver roles using React and TypeScript. Automated user access request workflows with approval tracking and activity logging. Designed RESTful APIs using Node.js and Express for CRUD operations and workflow management. Integrated PostgreSQL for secure and scalable data storage. Implemented PDF export for reports and activity logs to support compliance and audits. Enabled auditable and compliant access management aligned with pharmaceutical regulatory requirements.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "JWT", "RBAC", "Swagger", "jsPDF"],
    stats: { "Roles Managed": "10+", "Average Request Time": "48h", "Audit Coverage": "100%" },
    features: [
      "Role-based dashboards for Super Admin, Admin, and Approver.",
      "JWT authentication with secure authorization middleware.",
      "Automated access request workflows with multi-stage approvals.",
      "Activity logging and audit-ready PDF exports for compliance.",
      "RESTful API design with Swagger documentation and PostgreSQL persistence."
    ]
  },
  
];

export const certifications = [
  {
    title: "MERN Full-Stack Development",
    issuer: "Advanced Web Technologies",
    date: "2023",
    description: "Professional certification specializing in scalable Express APIs, complex MongoDB architectures, and state managers."
  },
  {
    title: "Industrial Web Protocols & OPCUA",
    issuer: "Automation IoT Society",
    date: "2024",
    description: "Deep specialization in OPCUA PubSub, socket integrations, and high-frequency network optimizations."
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    description: "Foundations in cloud services, VPC management, EC2 clusters, and S3 asset delivery structures."
  }
];
