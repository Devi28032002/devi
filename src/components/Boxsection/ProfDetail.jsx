import React from 'react';
import './ProfDetail.css';

const ProfDetail = () => {
  return (
    <div className="page-container">
      <div className="section">
        <div className="header">
          <div className="Profcontainer">
            <div className="logo">
              <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=' alt="Notable Alumni" className='profimage' />
              <h1>Pallab Dasgupta</h1>
            </div>
            <div className="creds">
              <h2>Ph.D. MIT, 2000</h2>
              <h3>Prof. Pallab Dasgupta will be on</h3>
            </div>
          </div>
        </div>
        <div className='contentContainer'>

        <div className='demiImage'>
            <img src='https://filelist.tudelft.nl/_processed_/a/2/csm_Minor_QuantumScienceQuantumInformation_c34e60582b.jpg' alt="Quantum Research" className='demimage' />
          </div>
          <div className="content">
            <h4>DESCRIPTION</h4>
            <h5>
              <p>
                This research area explores the fundamental principles of quantum mechanics and their applications in 
                quantum computing, quantum cryptography, and quantum communication. It involves understanding the behavior
                of particles at the quantum level and harnessing quantum phenomena for computation and communication.
                This research This research area explores the fundamental principles of quantum mechanics and their applications 
                in quantum computing, quantum cryptography, and quantum communication. It involves understanding the behavior of 
                particles at the quantum level and harnessing quantum phenomena for computation and communication technologies.
                area explores the fundamental principles of quantum 
              </p>
            </h5>
            <h6>TECHNICAL AREAS</h6>
            <h5>
              <a href="">Computer Vision</a>, 
              <a href="">Visual Perception</a>, 
              <a href="http://www1.acm.org/sigs/sigchi/">Human-Computer Interaction</a>, 
              <a href="http://accad.osu.edu/research/mocap/">Motion Capture</a>.
            </h5>
          </div>
          
        </div>
      </div>

      <div className="section">
        <div className="header">
          <div className="Profcontainer">
            <div className="logo">
              <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=' alt="Notable Alumni" className='profimage' />
              <h1>Pallab Dasgupta</h1>
            </div>
            <div className="creds">
              <h2>Ph.D. MIT, 2000</h2>
              <h3>Prof. Pallab Dasgupta will be on</h3>
            </div>
          </div>
        </div>
        <div className='contentContainer'>
          <div className="content">
            <h4>DESCRIPTION</h4>
            <h5>
              <p>
                This research area explores the fundamental principles of quantum mechanics and their applications in 
                quantum computing, quantum cryptography, and quantum communication. It involves understanding the behavior
                of particles at the quantum level and harnessing quantum phenomena for computation and communication.
                This research This research area explores the fundamental principles of quantum mechanics and their applications 
                in quantum computing, quantum cryptography, and quantum communication. It involves understanding the behavior of 
                particles at the quantum level and harnessing quantum phenomena for computation and communication technologies.
                area explores the fundamental principles of quantum 
              </p>
            </h5>
            <h6>TECHNICAL AREAS</h6>
            <h5>
              <a href="">Computer Vision</a>, 
              <a href="">Visual Perception</a>, 
              <a href="http://www1.acm.org/sigs/sigchi/">Human-Computer Interaction</a>, 
              <a href="http://accad.osu.edu/research/mocap/">Motion Capture</a>.
            </h5>
          </div>
          <div className='demiImage'>
            <img src='https://cdn.mos.cms.futurecdn.net/s4P6qwBaQaeNZJwAHybEwH-1200-80.jpg' alt="Quantum Research" className='demimage' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfDetail;
