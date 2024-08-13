import React from 'react'
import Building from '../../assets/Building.jpg'
import imag1 from '../../assets/imag1.jpg'
import library from '../../assets/library.jpg'
import mission from '../../assets/mission.jpg'
import './Giving.css'
const Giving = () => {
  return (
    <div>
      <div className="give-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Support Our University</h1>
          <p>Your gift empowers future leaders, drives innovation, and enriches the community.</p>
          <button className="cta-button">Donate Now</button>
        </div>
      </section>

      {/* Impact Section */}
        <section className="impact-section">
        <h2>Your Impact</h2>
        <div className="impact-cards">
          <div className="givcard">
            <img src={library} alt="Scholarships" className='stuImage0' />
            <h3>Scholarships</h3>
            <p>Your donation helps provide scholarships to deserving students.</p>
          </div>
          <div className="givcard">
            <img src={imag1} alt="Research" className='stuImage0' />
            <h3>Research</h3>
            <p>Fund groundbreaking research initiatives at our university.</p>
          </div>
          <div className="givcard">
            <img src={Building} alt="Infrastructure" className='stuImage0' />
            <h3>Infrastructure</h3>
            <p>Improve our campus facilities with your generous support.</p>
          </div> 
        
         </div>
      </section>  



{/* <section className="impact-section">
      <h2 className="section-title">Your Impact</h2>
      <div className="impact-cards">
        <div className="givcard">
          <div className="icon-wrapper">
            <img src={library} alt="Scholarships" className="stuImage0" />
          </div>
          <h3>Scholarships</h3>
          <p>Your donation helps provide scholarships to deserving students.</p>
        </div>
        <div className="givcard">
          <div className="icon-wrapper">
            <img src={imag1} alt="Research" className="stuImage0" />
          </div>
          <h3>Research</h3>
          <p>Fund groundbreaking research initiatives at our university.</p>
        </div>
        <div className="givcard">
          <div className="icon-wrapper">
            <img src={Building} alt="Infrastructure" className="stuImage0" />
          </div>
          <h3>Infrastructure</h3>
          <p>Improve our campus facilities with your generous support.</p>
        </div>
      </div>
    </section> */}



      {/* Donation Form Section */}
      <section className="donation-form-section">
        <h2>Make a Donation</h2>
        <form className="donation-form">
          <label>Personal Information</label>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <label>Payment Information</label>
          <input type="text" name="cardNumber" placeholder="Card Number" />
          <input type="text" name="expiryDate" placeholder="MM/YY" />
          <input type="text" name="cvv" placeholder="CVV" />
          <input type="text" name="billingAddress" placeholder="Billing Address" />
          <button type="submit" className="cta-button">Donate Now</button>
        </form>
      </section>

      {/* Student Messages Section */}
      {/* <section className="student-messages-section">
        <h2>Messages from Our Students</h2>
        <div className="student-cards">
          <div className="student-card">
          <img src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=GONEgP4Dcxbj66r3KcA6LpoZGWcOEaiUGEcXjOuBybE=" alt="Scholarships" className='stuImage0' />

            <h3>John Doe</h3>
            <p>"Thanks to the scholarship I received, I can focus on my studies and achieve my dreams."</p>
          </div>
          <div className="student-card">
          <img src="https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.jpg?s=612x612&w=0&k=20&c=cstb2dGLkOJSfRt9TBEj2G9hfYyIR8mYuBWdZZStsbc=" alt="Research" className='stuImage0' />
          <h3>Jane Smith</h3>
            <p>"Your support has given me the opportunity to pursue groundbreaking research."</p>
          </div>
          <div className="student-card">
          <img src="https://media.istockphoto.com/id/1326088633/photo/portrait-of-young-women-student-standing-isolated-over-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=kGRfPS6G0_IoE_-uGJ61ZnE93ju2_TLgwM0Lkwe0QnM=" alt="Infrastructure" className='stuImage0' />
          <h3>Emily Johnson</h3>
            <p>"I am grateful for the community outreach programs that help us make a difference."</p>
          </div>
        </div>
      </section> */}



<section className="student-messages-section1">
      <h2 className="section-title1">Messages from Our Students</h2>
      <div className="student-cards1">
        <div className="student-card1">
          <div className="icon-wrapper1">
            <img
              src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=GONEgP4Dcxbj66r3KcA6LpoZGWcOEaiUGEcXjOuBybE="
              alt="John Doe"
              className="stuImage01"
            />
          </div>
          <h3>John Doe</h3>
          <p>"Thanks to the scholarship I received, I can focus on my studies and achieve my dreams."</p>
        </div>
        <div className="student-card1">
          <div className="icon-wrapper1">
            <img
              src="https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.jpg?s=612x612&w=0&k=20&c=cstb2dGLkOJSfRt9TBEj2G9hfYyIR8mYuBWdZZStsbc="
              alt="Jane Smith"
              className="stuImage01"
            />
          </div>
          <h3>Jane Smith</h3>
          <p>"Your support has given me the opportunity to pursue groundbreaking research."</p>
        </div>
        <div className="student-card1">
          <div className="icon-wrapper1">
            <img
              src="https://media.istockphoto.com/id/1326088633/photo/portrait-of-young-women-student-standing-isolated-over-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=kGRfPS6G0_IoE_-uGJ61ZnE93ju2_TLgwM0Lkwe0QnM="
              alt="Emily Johnson"
              className="stuImage01"
            />
          </div>
          <h3>Emily Johnson</h3>
          <p>"I am grateful for the community outreach programs that help us make a difference."</p>
        </div>
      </div>
    </section>


      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Your Support Matters</h2>
        <p>Join us in shaping the future. Every donation counts.</p>
        
      </section>

      {/* Footer Section */}
      {/* <footer className="footer-section">
        <p>&copy; 2024 University Name. All Rights Reserved.</p>
      </footer> */}
    </div>
    </div>
  )
}

export default Giving
