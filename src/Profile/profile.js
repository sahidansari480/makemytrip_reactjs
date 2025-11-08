import Home from "../HomePage/HomePage";

import { useState, useEffect } from "react";
import "../CSS_file/Profile.css";

export function Profile() {
  //const [profile, setProfile] = useState(null);


   const profile = ({
      name: "Sahid Ansari",
      title: "Software Developer (4+ Years Experience)",
      about:
        "I’m a passionate full-stack developer with 4 years of experience in React.js, Node.js, and .NET. I build scalable web apps and love solving real-world problems with clean code.",
      skills: [
        "React.js",
        "Node.js",
        ".NET Core",
        "SQL Server",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
      ],
      email: "sahid.ansari@example.com",
      phone: "+91 98765 43210",
    });
  

  return (
    <div>
      <Home />
      <div className="profile-container">
        <div className="profile-card">
          {/* Header */}
          <div className="profile-header">
            <img src={profile.imageUrl} alt="profile" />
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
          </div>

          {/* Body */}
          <div className="profile-body">
            {/* About */}
            <section className="profile-section">
              <h2>👨‍💻 About Me</h2>
              <p>{profile.about}</p>
            </section>

            {/* Skills */}
            <section className="profile-section">
              <h2>⚙️ Skills</h2>
              <div className="skills-container">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="profile-section">
              <h2>📫 Contact</h2>
              <ul className="contact-list">
                <li>
                  <strong>Email:</strong> {profile.email}
                </li>
                <li>
                  <strong>Phone:</strong> {profile.phone}
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedin}
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    {profile.github}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
