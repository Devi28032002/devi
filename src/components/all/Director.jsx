import React from 'react';
import './Director.css';

const Director = () => {
  return (
    <div className="director-desk">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Prof. Virendra Kumar Tewari</h1>
          <h2>Director, IIT-Karagpur</h2>
          <p>Leading with vision, passion and dedication.</p>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4CK8s7_2LeOAoG3_EztaS0GPjrF5-oneAQ&s" alt="Director" />
        </div>
      </section>

      {/* About the Director Section */}
      <section className="about-section">
        <div className="about-content">
          <h3>About the Director</h3>
          <p>Prof. Virendra Kumar Tewari, faculty member and former Head of the Department of Agricultural and Food Engineering and Rural 
            Development Centre has been appointed as the Director of Indian Institute of Technology Kharagpur effective from December 31, 2019, for a period of five years.</p>
          <ul>
            <li>20+ years in academic leadership</li>
            <li>Author of 10+ research papers</li>
            <li>Recipient of numerous academic awards</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD01D1oBojsBVon-UGQMIdu86dZspLCkR7g&s" alt="About Director" />
        </div>
      </section>

      {/* Message from the Director Section */}
      <section className="message-section">
        <div className="message-content">
          <blockquote>
            "At XYZ University, we are committed to fostering an environment where innovation, inclusivity, and academic excellence thrive. My mission is to ensure that every student is prepared to succeed in the global arena."
          </blockquote>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="card">
          <h4>Vision</h4>
          <p>To be a global leader in education and research, fostering innovation and knowledge for societal advancement.</p>
        </div>
        <div className="card">
          <h4>Mission</h4>
          <p>To provide an inclusive and dynamic learning environment that empowers students to achieve their full potential.</p>
        </div>
        <div className="card">
          <h4>Core Values</h4>
          <p>Integrity, Excellence, Innovation, Inclusivity.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h4>Contact the Director</h4>
          <p>Email: <a href="mailto:director@xyzuniversity.edu">director@xyzuniversity.edu</a></p>
          <p>Office Address: 1234 University Ave, City, Country</p>
          <p>Phone Number: +123-456-7890</p>
          <button className="contact-button">Send a Message</button>
        </div>
      </section>

      
    </div>
  );
};

export default Director;
