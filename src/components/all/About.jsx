// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './About.css';
// // import image1 from '../assets/image1.jpg'
// // import Building from '../assets/Building.jpg'
// // import studentImg from '../assets/studentImg.jpg'
// // import research from '../assets/research.jpg'
// // import mission from '../assets/mission.jpg'
// // import CountUp from 'react-countup'
// // import vission from '../assets/vission.jpg'
// // import { useTranslation } from 'react-i18next';
// // const About = () => {
// //   const { t } = useTranslation();
// // const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <>
// //       <div className="about-container">
// //         <img src={image1} alt="IIT KGP" className="about-image" />
// //         <div className="aboutText">
// //           <p>About IIT KGP</p>
// //           <br />
// //           <h5>
// //             IIT Kharagpur, the oldest, largest and the most diversified of all IITs.
// //             The motto of IIT Kharagpur is "योगः कर्मसु कौशलम्".
// //           </h5>
// //         </div>
// //       </div>

// //       <div className="aboutText2">
// //         The motto of IIT Kharagpur is "योगः कर्मसु कौशलम्". This literally translates to "Excellence in action is Yoga", 
// //         essentially implying that doing your work well is (true) yoga. This can be traced to Sri Krishna's discourse with Arjuna in the Bhagavad Gita.
// //          The quote, in the larger context of the Gita, urges man to acquire equanimity because a mind of equanimity allows a man to shed distracting thoughts of the effects of his deeds and concentrate on the task before him. Equanimity is the source of perfection in Karmic endeavours that leads to Salvation.
// //       </div>

// //       <div className='achievements'>
// //         <div className="image-container">
// //         <Link to="/history#IIThistory" className="container">
// //           <div className="container">
        
// //             <img src={Building} alt="Building" className="image" />
// //             <div className="middle">
// //               <div className="text">History</div>
// //             </div>
           
// //           </div>
// //           </Link>

// //           <Link to="/history#achievements" className="container">
// //           <div className="container">
// //             <img src={studentImg} alt="Avatar" className="image" />
// //             <div className="middle">
// //               <div className="text">Achievements</div>
// //             </div>
// //           </div>
// //           </Link>

// //           <Link to="/history#campus" className="container">
// //           <div className="container">
// //             <img src={image1} alt="Avatar" className="image" />
// //             <div className="middle">
// //               <div className="text">Campus and Infrastructure</div>
// //             </div>
// //           </div>
// //           </Link>

// //           <Link to="/history#research" className="container">
// //           <div className="container">
// //             <img src={research} alt="Avatar" className="image" />
// //             <div className="middle">
// //               <div className="text">Research and Development</div>
// //             </div>
// //           </div>
// //           </Link>
// //         </div>
// //       </div>

// //       <section className="mission-section">
// //       <div className="mission-content">
// //         <h2>Our Mission</h2>
// //         <p>
// //           At IIT Kharagpur, our mission is to advance knowledge and educate students in science, technology, and other areas that will best serve the nation and the world in the 21st century. We aim to provide our students with a comprehensive education, combining rigorous academic study with opportunities for professional development and real-world experience. Our goal is to foster a spirit of innovation, critical thinking, and leadership that prepares our graduates to make significant contributions to society and to solve complex global challenges.
// //         </p>
// //       </div>
// //       <div className="mission-image">
// //         <img src={mission} alt="IIT Kharagpur" />
// //       </div>
// //     </section>


// //       <div
// //         className="stats-container"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         <div className="stat">
// //           <span className="countup-number">
// //             <CountUp start={isHovered ? 0 : 16590} end={16590} duration={2.5}  suffix="+"  />
// //           </span>
// //           <span className='countupText'>Students</span>
// //         </div>


// //          <div className="stat">
// //           <span className="countup-number">
// //             <CountUp start={isHovered ? 0 : 770} end={770} duration={2.5}  suffix="+"  />
// //           </span>
// //           <span className='countupText'>Faculty</span>
          
// //         </div>

// //         <div className="stat">
// //           <span className="countup-number">
// //             <CountUp start={isHovered ? 0 : 860} end={860} duration={2.5}  suffix="+" />
// //           </span>
// //           <span className='countupText'>Staff</span>
// //         </div>
// //         <div className="stat">
// //           <span className="countup-number">
// //             <CountUp start={isHovered ? 0 : 1220} end={1220} duration={2.5}  suffix="+"  />
// //           </span>
// //           <span className='countupText'>Projects</span>
// //         </div>
// //       </div>

// //       <section className="vision-section">

// //       <div className="vision-image">
// //         <img src={vission} alt="IIT Kharagpur Vision" />
// //       </div>
// //       <div className="vision-content">
// //         <h2>Our Vision</h2>
// //         <div className="vision-statement">
// //           <p>
// //             To be a centre of excellence in education and research, producing global leaders in science, technology, and management.
// //           </p>
// //           <p>
// //             To be a hub of knowledge creation that prioritises the frontier areas of national and global importance.
// //           </p>
// //           <p>
// //             To improve the life of every citizen of the country.
// //           </p>
// //         </div>
// //       </div>
     
// //     </section>


// //     </>
// //   )
// // }

// // export default About



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './About.css';
// import image1 from '../assets/image1.jpg'
// import Building from '../assets/Building.jpg'
// import studentImg from '../assets/studentImg.jpg'
// import research from '../assets/research.jpg'
// import mission from '../assets/mission.jpg'
// import CountUp from 'react-countup'
// import vission from '../assets/vission.jpg'
// import { useTranslation } from 'react-i18next';

// const About = () => {
//   const { t } = useTranslation();
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <div className="about-container">
//         <img src={image1} alt="IIT KGP" className="about-image" />
//         <div className="aboutText">
//           <p>{t('aboutPage.heading')}</p>
//           <br />
//           <h5>{t('aboutPage.subheading')}</h5>
//         </div>
//       </div>

//       <div className="aboutText2">
//         {t('aboutPage.description')}
//       </div>

//       <div className='achievements'>
//         <div className="image-container">
//           <Link to="/history#IIThistory" className="container">
//             <div className="container">
//               <img src={Building} alt="Building" className="image" />
//               <div className="middle">
//                 <div className="text">{t('aboutPage.history')}</div>
//               </div>
//             </div>
//           </Link>

//           <Link to="/history#achievements" className="container">
//             <div className="container">
//               <img src={studentImg} alt="Avatar" className="image" />
//               <div className="middle">
//                 <div className="text">{t('aboutPage.achievements')}</div>
//               </div>
//             </div>
//           </Link>

//           <Link to="/history#campus" className="container">
//             <div className="container">
//               <img src={image1} alt="Avatar" className="image" />
//               <div className="middle">
//                 <div className="text">{t('aboutPage.campus')}</div>
//               </div>
//             </div>
//           </Link>

//           <Link to="/history#research" className="container">
//             <div className="container">
//               <img src={research} alt="Avatar" className="image" />
//               <div className="middle">
//                 <div className="text">{t('aboutPage.research')}</div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       <section className="mission-section">
//         <div className="mission-content">
//           <h2>{t('aboutPage.missionTitle')}</h2>
//           <p>{t('aboutPage.missionDescription')}</p>
//         </div>
//         <div className="mission-image">
//           <img src={mission} alt="IIT Kharagpur" />
//         </div>
//       </section>

//       <div
//         className="stats-container"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="stat">
//           <span className="countup-number">
//             <CountUp start={isHovered ? 0 : 16590} end={16590} duration={2.5} suffix="+" />
//           </span>
//           <span className='countupText'>{t('aboutPage.students')}</span>
//         </div>

//         <div className="stat">
//           <span className="countup-number">
//             <CountUp start={isHovered ? 0 : 770} end={770} duration={2.5} suffix="+" />
//           </span>
//           <span className='countupText'>{t('aboutPage.faculty')}</span>
//         </div>

//         <div className="stat">
//           <span className="countup-number">
//             <CountUp start={isHovered ? 0 : 860} end={860} duration={2.5} suffix="+" />
//           </span>
//           <span className='countupText'>{t('aboutPage.staff')}</span>
//         </div>
//         <div className="stat">
//           <span className="countup-number">
//             <CountUp start={isHovered ? 0 : 1220} end={1220} duration={2.5} suffix="+" />
//           </span>
//           <span className='countupText'>{t('aboutPage.projects')}</span>
//         </div>
//       </div>

//       <section className="vision-section">
//         <div className="vision-image">
//           <img src={vission} alt="IIT Kharagpur Vision" />
//         </div>
//         <div className="vision-content">
//           <h2>{t('aboutPage.visionTitle')}</h2>
//           <div className="vision-statement">
//             <p>{t('aboutPage.visionStatement1')}</p>
//             <p>{t('aboutPage.visionStatement2')}</p>
//             <p>{t('aboutPage.visionStatement3')}</p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import image1 from '../assets/image1.jpg';
import Building from '../assets/Building.jpg';
import studentImg from '../assets/studentImg.jpg';
import research from '../assets/research.jpg';
import mission from '../assets/mission.jpg';
import CountUp from 'react-countup';
import vission from '../assets/vission.jpg';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='MainaboutContainer'>
      <div className="about-container">
        <img src={image1} alt="IIT KGP" className="about-image" />
        <div className="aboutText">
          <p>About IIT KGP</p>
          <br />
          <h5>
            IIT Kharagpur, the oldest, largest and the most diversified of all IITs. The motto of IIT Kharagpur is "योगः कर्मसु कौशलम्".
          </h5>
        </div>
      </div>

      <div className="aboutText2">
        The motto of IIT Kharagpur is "योगः कर्मसु कौशलम्". This literally translates to "Excellence in action is Yoga",
        essentially implying that doing your work well is (true) yoga. This can be traced to Sri Krishna's discourse with Arjuna in the Bhagavad Gita.
        The quote, in the larger context of the Gita, urges man to acquire equanimity because a mind of equanimity allows a man to shed distracting thoughts of the effects of his deeds and concentrate on the task before him. Equanimity is the source of perfection in Karmic endeavours that leads to Salvation.
      </div>

      <div className='achievements'>
        <div className="image-container">
          <Link to="/history#IIThistory" className="container">
            <div className="container">
              <img src={Building} alt="Building" className="image" />
              <div className="middle">
                <div className="text">History</div>
              </div>
            </div>
          </Link>

          <Link to="/history#achievements" className="container">
            <div className="container">
              <img src={studentImg} alt="Avatar" className="image" />
              <div className="middle">
                <div className="text">Achievements</div>
              </div>
            </div>
          </Link>

          <Link to="/history#campus" className="container">
            <div className="container">
              <img src={image1} alt="Avatar" className="image" />
              <div className="middle">
                <div className="text">Campus and Infrastructure</div>
              </div>
            </div>
          </Link>

          <Link to="/history#research" className="container">
            <div className="container">
              <img src={research} alt="Avatar" className="image" />
              <div className="middle">
                <div className="text">Research and Development</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At IIT Kharagpur, our mission is to advance knowledge and educate students in science, technology, and other areas that will best serve the nation and the world in the 21st century. We aim to provide our students with a comprehensive education, combining rigorous academic study with opportunities for professional development and real-world experience. Our goal is to foster a spirit of innovation, critical thinking, and leadership that prepares our graduates to make significant contributions to society and to solve complex global challenges.
          </p>
        </div>
        <div className="mission-image">
          <img src={mission} alt="IIT Kharagpur" />
        </div>
      </section>

      <div
        className="stats-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="stat">
          <span className="countup-number">
            <CountUp start={isHovered ? 0 : 16590} end={16590} duration={2.5} suffix="+" />
          </span>
          <span className='countupText'>Students</span>
        </div>

        <div className="stat">
          <span className="countup-number">
            <CountUp start={isHovered ? 0 : 770} end={770} duration={2.5} suffix="+" />
          </span>
          <span className='countupText'>Faculty</span>
        </div>

        <div className="stat">
          <span className="countup-number">
            <CountUp start={isHovered ? 0 : 860} end={860} duration={2.5} suffix="+" />
          </span>
          <span className='countupText'>Staff</span>
        </div>
        <div className="stat">
          <span className="countup-number">
            <CountUp start={isHovered ? 0 : 1220} end={1220} duration={2.5} suffix="+" />
          </span>
          <span className='countupText'>Projects</span>
        </div>
      </div>

      <section className="vision-section">
        <div className="vision-image">
          <img src={vission} alt="IIT Kharagpur Vision" />
        </div>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <div className="vision-statement">
            <p>To be a centre of excellence in education and research, producing global leaders in science, technology, and management.</p>
            <p>To be a hub of knowledge creation that prioritises the frontier areas of national and global importance.</p>
            <p>To improve the life of every citizen of the country.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
