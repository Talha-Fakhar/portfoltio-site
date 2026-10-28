import "./styles/Career.css";

const experience = [
  {
    role: "Software Engineer",
    company: "Stackworx",
    period: "2025 – 2026",
    description:
      "Oct 2025–August 2026. Building production applications with Ruby on Rails, React, Node.js, and PostgreSQL. Recent work includes sports-kit operations for Timbits Sports, franchise finance for RMR Tim Hortons, CSR grant workflows for Smile Cookie, a compliance-first attorney marketplace, LoadBetter, and Flip property management.",
  },
  {
    role: "Associate Software Engineer",
    company: "Visnext Software Solutions",
    period: "2024 – 2025",
    description:
      "Jul 2024–Oct 2025. Co-developed My Money Matters across Rails and the MERN stack; built a reusable Node.js audit-log package; integrated Auth0 authentication and authorization; deployed containerized services to GCP Cloud Run and Compute Engine; delivered responsive React interfaces from Figma; and contributed to Agile sprints, cross-functional collaboration, and code reviews.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((item) => (
            <div className="career-info-box" key={item.company}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
