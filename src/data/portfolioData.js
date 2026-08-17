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
    role: "Fullstack Developer",
    company: "dataeaze systems",
    duration: "Sep 2025 - Dec 2025",
    description: "I am a full stack developer currently working as a client. Fullstack developer building real-time industrial monitoring systems using React, Node.js, OPC UA, and WebSockets.",
    bullets: [
      "Built low-latency dashboards, REST APIs, and scalable enterprise applications for manufacturing environments.",
      "Integrated real-time telemetry using OPC UA and WebSockets for operational visibility.",
      "Collaborated with stakeholders to deliver high-performance industrial monitoring solutions."
    ]
  },
  {
    id: 5,
    role: "Fullstack Developer",
    company: "Softkode Technologies Private Limited",
    duration: "Feb 2023 - Sep 2025",
    description: "Full Stack Developer at Softkode Technologies Private Limited, building secure enterprise web applications using React, TypeScript, Node.js, and PostgreSQL. Skilled in role-based access control, workflow automation, REST APIs, and responsive UI development.",
    bullets: [
      "Implemented RBAC-driven enterprise workflows and secure CRUD operations.",
      "Developed responsive user interfaces and reusable React components.",
      "Designed PostgreSQL-backed REST APIs to support scalable business applications."
    ]
  }
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
  {
    id: 5,
    title: "Jain Catering Website",
    client: "Jain Caterers",
    category: "Business Website",
    shortDesc: "Responsive, SEO-friendly catering website built with React and integrated with WordPress blog.",
    longDesc: "Developed a responsive and user-friendly catering business website for Jain Caterers using React. Designed multiple pages including Home, Menus, About Us, Our Chefs, Blog, and Contact. Integrated dynamic blog content fetched from WordPress APIs. Implemented modern UI with reusable components and smooth navigation. Optimized website performance and mobile responsiveness; deployed a production-ready build with SEO-friendly structure.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs", "WordPress API", "Responsive Design"],
    stats: { "Pages": "6+", "Load Time": "<2s", "Mobile Friendly": "Yes" },
    features: [
      "Multi-page site: Home, Menus, About Us, Our Chefs, Blog, Contact.",
      "Dynamic blog content via WordPress REST API.",
      "Reusable React components and smooth client-side routing.",
      "Performance optimizations and SEO-friendly build deployment."
    ]
  }

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
