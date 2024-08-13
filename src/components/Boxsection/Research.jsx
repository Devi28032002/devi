// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Research.css';
// import imag1 from '../../assets/imag1.jpg';
// import Building from '../../assets/Building.jpg';

// const Research = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleLoadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const facilities = [
//     'Advanced VLSI Laboratory',
//     'Centre for Railway Research',
//     'Central Research Facility',
//     'Centre for Theoretical Studies',
//     'Computer and Informatics Centre',
//     'Kalpana Chawla Space Technology Cell (KCSTC)',
//     'Membrane Separation Laboratory',
//     'Microfluidics and Microscale Transport Processes Laboratory',
//   ];

//   return (
//     <div className="research-container">
//       <div className="researchhero-section">
//         <div className="overlay">
//           <h1>Research and Development</h1>
//           <p>Innovating for a better future</p>
//         </div>
//       </div>

//       <h2 className="mainHeading">Key Research areas</h2>
//       <div className="card-container">
//         <Link to="/prof" className="card">
//           <div className="card-header">
//             <span className="card-number">01</span>
//             <h3 className="card-title">Quantum Mechanics and Quantum Computing</h3>
//           </div>
//           <div className="card-content">
//             <p>Details about the first research project.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>

//         <Link to="/prof" className="card">
//           <div className="card-header">
//             <span className="card-number">02</span>
//             <h3 className="card-title">Biotechnology</h3>
//           </div>
//           <div className="card-content">
//             <p>Environmental concern is of our utmost importance. Our innovations in renewable integrated high power density converters aim to oust the present.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>

//         <Link to="/prof" className="card">
//           <div className="card-header">
//             <span className="card-number">03</span>
//             <h3 className="card-title">Renewable Energy</h3>
//           </div>
//           <div className="card-content">
//             <p>Environmental concern is of our utmost importance. Our innovations in renewable integrated high power density converters aim to oust the present state of the art products.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>

//         <Link to="/research/renewable-energy" className="card">
//           <div className="card-header">
//             <span className="card-number">04</span>
//             <h3 className="card-title">Renewable Energy</h3>
//           </div>
//           <div className="card-content">
//             <p>Details about the third research project, density converters aim to oust the present state of the art products.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>

//         <Link to="/research/renewable-energy" className="card">
//           <div className="card-header">
//             <span className="card-number">05</span>
//             <h3 className="card-title">Renewable Energy</h3>
//           </div>
//           <div className="card-content">
//             <p>Details about the third research project. Details about the third research project.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>

//         <Link to="/research/renewable-energy" className="card">
//           <div className="card-header">
//             <span className="card-number">06</span>
//             <h3 className="card-title">Renewable Energy</h3>
//           </div>
//           <div className="card-content">
//             <p>Details about the third research project. Details about the third research project.</p>
//           </div>
//           <div className="card-icon">
//             <span className="icon">↗</span>
//           </div>
//         </Link>
//       </div>

//       <div className="fullContainer">
//         <div className="facilitiesContainer">
//           <h2>Research Facilities</h2>
//           <ul className="facilitiesList">
//             {facilities.slice(0, 4).map((facility, index) => (
//               <li key={index}>
//                 <span className="icon">
//                   <i className="fa fa-check" aria-hidden="true"></i>
//                 </span>
//                 {facility}
//               </li>
//             ))}
//             {isExpanded &&
//               facilities.slice(4).map((facility, index) => (
//                 <li key={index + 4}>
//                   <span className="icon">
//                     <i className="fa fa-check" aria-hidden="true"></i>
//                   </span>
//                   {facility}
//                 </li>
//               ))}
//           </ul>
//           <button onClick={handleLoadMore}>
//             {isExpanded ? 'Show less' : 'Load more'}
//           </button>
//         </div>

//         <div className="videoContainer">
//           <video controls>
//             <source src="video1.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <img src={Building} alt="Hijli Detention Camp" className="secImage" />
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="footer-content">
//           <p>&copy; 2024 IIT Kharagpur. All rights reserved.</p>
//           <ul className="footer-links">
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//             <li><a href="#privacy">Privacy Policy</a></li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Research;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';
import imag1 from '../../assets/imag1.jpg';
import Building from '../../assets/Building.jpg';

const Research = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const facilities = [
    'Advanced VLSI Laboratory',
    'Centre for Railway Research',
    'Central Research Facility',
    'Centre for Theoretical Studies',
    'Computer and Informatics Centre',
    'Kalpana Chawla Space Technology Cell (KCSTC)',
    'Membrane Separation Laboratory',
    'Microfluidics and Microscale Transport Processes Laboratory',
  ];

  return (
    <div className="research-container">
      {/* Research Navigation */}
      {/* <nav className="research-nav">
        <ul>
          <li><a href="#research-areas">Key Research Areas</a></li>
          <li><a href="#research-facilities">Research Facilities</a></li>
          <li><a href="#initiatives">Research Initiatives</a></li>
          <li><a href="#entrepreneurship">Entrepreneurship</a></li>
          <li><a href="#policies">IP Policies</a></li>
          <li><a href="#sponsored">Sponsored Research</a></li>
        </ul>
      </nav> */}

      {/* Hero Section */}
      <div className="researchhero-section" id="hero-section">
        <div className="overlay">
          <h1>Research and Development</h1>
          <p>Innovating for a better future</p>
        </div>
      </div>

      {/* Key Research Areas */}
      <h2 className="mainHeading" id="research-areas">Key Research areas</h2>
      <div className="card-container">
        <Link to="/prof" className="card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h3 className="card-title">Quantum Mechanics and Quantum Computing</h3>
          </div>
          <div className="card-content">
            <p>Details about the first research project.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>

        <Link to="/prof" className="card" >
          <div className="card-header">
            <span className="card-number">02</span>
            <h3 className="card-title">Biotechnology</h3>
          </div>
          <div className="card-content">
            <p>Environmental concern is of our utmost importance. Our innovations in renewable integrated high power density converters aim to oust the present.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>

        <Link to="/prof" className="card">
          <div className="card-header">
            <span className="card-number">03</span>
            <h3 className="card-title">Renewable Energy</h3>
          </div>
          <div className="card-content">
            <p>Environmental concern is of our utmost importance. Our innovations in renewable integrated high power density converters aim to oust the present state of the art products.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>

        <Link to="/research/renewable-energy" className="card">
          <div className="card-header">
            <span className="card-number">04</span>
            <h3 className="card-title">Renewable Energy</h3>
          </div>
          <div className="card-content">
            <p>Details about the third research project, density converters aim to oust the present state of the art products.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>

        <Link to="/research/renewable-energy" className="card">
          <div className="card-header">
            <span className="card-number">05</span>
            <h3 className="card-title">Renewable Energy</h3>
          </div>
          <div className="card-content">
            <p>Details about the third research project. Details about the third research project.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>

        <Link to="/research/renewable-energy" className="card">
          <div className="card-header">
            <span className="card-number">06</span>
            <h3 className="card-title">Renewable Energy</h3>
          </div>
          <div className="card-content">
            <p>Details about the third research project. Details about the third research project.</p>
          </div>
          <div className="card-icon">
            <span className="icon">↗</span>
          </div>
        </Link>
      </div>

      {/* Research Facilities Section */}
      <div className="fullContainer" id="research-facilities">
        <div className="facilitiesContainer">
          <h2>Research Facilities</h2>
          <ul className="facilitiesList">
            {facilities.slice(0, 4).map((facility, index) => (
              <li key={index}>
                <span className="icon">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </span>
                {facility}
              </li>
            ))}
            {isExpanded &&
              facilities.slice(4).map((facility, index) => (
                <li key={index + 4}>
                  <span className="icon">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  {facility}
                </li>
              ))}
          </ul>
          <button onClick={handleLoadMore}>
            {isExpanded ? 'Show less' : 'Load more'}
          </button>
        </div>

        <div className="videoContainer">
          <video controls>
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={Building} alt="Hijli Detention Camp" className="secImage" />
        </div>
      </div>

<div className='secContain11'>
      <section id="initiatives" className='ReSection' style={{ backgroundImage: "url('/image1.jpg')" }}>
                    <h2>Research Initiatives</h2>
                    {/* Content for Research Initiatives */}
                </section>
                <section id="entrepreneurship" className='ReSection' style={{ backgroundImage: "url('/researchExcel.jpg')"}}>
                    <h2>Entrepreneurship</h2>
                    {/* Content for Entrepreneurship */}
                </section>
                <section id="policies" className='ReSection' style={{ backgroundImage: "url('/mission.jpg')"}}>
                    <h2>IP Policies</h2>
                    {/* Content for IP Policies */}
                </section>
                <section id="sponsored" className='ReSection' style={{ backgroundImage: "url('/library.jpg')"}}>
                    <h2>Sponsored Research</h2>
                    {/* Content for Sponsored Research */}
                </section>
                </div>
      
    </div>
  );
};

export default Research;
