import React from 'react'
import {Link} from 'react-router-dom'
import './Phdpage.css'
const Phdpage = () => {
  return (
    <div className='CompPhp'>
       <div className="phdpage">
        <img src='https://thumbs.dreamstime.com/b/female-college-student-books-outdoors-beautiful-young-woman-backpack-carrying-lots-campus-95821586.jpg' alt="image" className="phd-image" />
        <div className="welcomeText">
          <p>Find your dream study</p>
         
          <h5> Discover PhD degrees Related to Physics </h5>
        </div>
      </div>


      <div className="phdStreams">
  <h2>Choose Your PhD Stream</h2>
  <ul className="streamList">

  <Link to="/phdsub" className="card1">
    <li>
      
      <i className="fas fa-fire-alt"></i>
      <p>PhD in Fluid Thermodynamic Engineering</p>
    </li>
    </Link>
    <li>
      <i className="fas fa-lightbulb"></i>
      <p>PhD in Optics and Photonics</p>
    </li>
    <li>
      <i className="fas fa-atom"></i>
      <p>Ph.D. in Theoretical Physics</p>
    </li>
    <li>
      <i className="fas fa-magnet"></i>
      <p>PhD in Applied Physics</p>
    </li>
    <li>
      <i className="fas fa-rocket"></i>
      <p>Ph.D. of Particle Physics</p>
    </li>
    <li>
      <i className="fas fa-braille"></i>
      <p>PhD in Condensed Matter Physics</p>
    </li>

    <li>
      <i className="fas fa-lightbulb"></i>
      <p>PhD in Optics and Photonics</p>
    </li>
    <li>
      <i className="fas fa-fire-alt"></i>
      <p>PhD in Fluid Thermodynamic Engineering</p>
    </li>
  </ul>
</div>


<div className="requirementsContainer">
  <div className="requirementSection">
    <h3>Academic Requirements</h3>
    <div className="requirementDetails">
      <p><strong>GPA:</strong> 2.75</p>
      <p><strong>English Requirements:</strong></p>
      <ul>
        <li>IELTS: 6.5</li>
        <li>TOEFL iBT: 79</li>
      </ul>
      <p><strong>Other Requirements:</strong></p>
      <ul>
        <li>Bachelor's degree or higher from an accredited college or university</li>
        <li>Minimum 2.750 GPA on a 4.000 point scale</li>
        <li>Official transcripts</li>
        <li>GRE (general) scores (optional)</li>
        <li>Résumé or vita</li>
        <li>Goal statement</li>
        <li>Three letters of recommendation</li>
        <li>English language proficiency</li>
      </ul>
      <a href="#">Make sure you meet all requirements</a>
    </div>
  </div>

  <div className="requirementSection">
    <h3>Funds from the Institute</h3>
    <div className="fundDetails">
      <ul>
        <li>Stipends</li>
        <li>Scholarships</li>
        <li>Tuition Waivers</li>
        <li>Research Grants</li>
        <li>Research Assistantships (RA)</li>
        <li>Teaching Assistantships (TA)</li>
      </ul>
    </div>
  </div>


  <div className="key-information">
      <h2>Key Information</h2>
      <div className="info">
        <div className="start-dates">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem numquam incidunt quam, a non saepe, 
        inventore rerum, officia adipisci aut accusamus mollitia libero modi suscipit impedit iste consectetur excepturi optio!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem numquam incidunt quam, a non saepe, inventore rerum, 
        officia adipisci aut accusamus mollitia libero modi suscipit impedit iste consectetur excepturi optio!
        <h3>Start Dates & Application Deadlines</h3>
          <p><strong>Starting January 2025</strong></p>
          <p>Apply before Sep 2024</p>
          <p><strong>Starting August 2025</strong></p>
          <p>Apply before Feb 2025</p>
        </div>
        <div className="language">
          <h3>Language</h3>
          <p>English</p>
        </div>
      </div>
    </div>


</div>

    </div>
  )
}

export default Phdpage
