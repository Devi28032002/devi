import React from 'react';
import './History.css';
import Building from '../../assets/Building.jpg';
import image1 from '../../assets/image1.jpg';
import nehruMuseum from '../../assets/nehruMuseum.jpg';
import alumni from'../../assets/alumni.jpg'
import researchExcel from '../../assets/researchExcel.jpg'
import inovation from '../../assets/inovation.jpg'
import hostel from '../../assets/hostel.jpg'
import library from '../../assets/library.jpg'
import sports from '../../assets/sports.jpg'

const History = () => {
  return (
    <div className='single-page'>
      <div className='history-page'>
        <section id="IIThistory"  className='section'>
          <h1>History of IIT Kharagpur</h1>
          <div className='content-row'>
            <p>
              On the grounds that West Bengal had the highest concentration of industries at the time, Bidhan Chandra Roy, the Chief Minister of West Bengal, persuaded Jawaharlal Nehru (India's first prime minister) to establish the first institute in West Bengal. The first Indian Institute of Technology was thus established in May 1950 as the Eastern Higher Technical Institute. It was located in Esplanade East, Calcutta, and in September 1950 shifted to its permanent campus at Hijli, Kharagpur 120 kilometres (75 mi) south-west of Kolkata (formerly called Calcutta). Hijli had been used as a detention camp during the period of British rule in India, where Indian independence activists were imprisoned.
            </p>
            <img src={Building} alt="Hijli Detention Camp" className='section-image' />
          </div>
          <div className='content-row'>
          <img src={nehruMuseum}  alt="Main building under construction" className='section-image' />
            <p>
              IIT Kharagpur is the 4th oldest technical institute in the West Bengal state after IIEST, Shibpur (established as B.E. College in 1856), Jadavpur University (established as Bengal technical institute in 1906) and Rajabazar Science College (established as Calcutta University campus for Science and Technology in 1914). When the first session started in August 1951, there were 224 students and 42 teachers in the ten departments of the institute. The classrooms, laboratories and the administrative office were housed in the historic building of the Hijli Detention Camp (now known as Shaheed Bhawan), where political revolutionaries were imprisoned during the period of British colonial rule. The office building had served as the headquarters of the Bomber Command of the U.S. 20th Air Force during World War II.
            </p>
           
          </div>
        </section>
      </div>



     




    <div className='achievements-page'  >
      <section  className='hero' id='achievements'>
        <h1>Achievements of IIT Kharagpur</h1>
        <p>A Legacy of Excellence in Education, Research, and Innovation</p>
      </section>
      
      <section className='achievement-section' id='achievements'>
        <div className='content-row'>
          <img src={alumni} alt="Notable Alumni" className='section-image' />
          <div className='text-content'>
            <h2>Notable Alumni</h2>
            <p>IIT Kharagpur has produced a significant number of notable alumni who have excelled in various fields including technology, business, academia, and public service. This includes Sundar Pichai (CEO of Alphabet Inc.), Arvind Krishna (CEO of IBM), and Arjun Malhotra (co-founder of HCL Technologies).</p>
          </div>
        </div>
        
        <div className='content-row' id='research'>
          <div className='text-content'>
            <h2>Research Excellence</h2>
            <p>The institute has been at the forefront of cutting-edge research in areas such as nanotechnology, artificial intelligence, robotics, and renewable energy. It regularly publishes in high-impact international journals and collaborates with global research institutions.</p>
          </div>
          <img src={researchExcel} alt="Research Excellence" className='section-image' />
        </div>
        
        <div className='content-row'>
          <img src={inovation} alt="Innovations and Patents" className='section-image' />
          <div className='text-content'>
            <h2>Innovations and Patents</h2>
            <p>IIT Kharagpur has a robust track record of innovation and patent filings. It holds numerous patents across various domains, reflecting its commitment to contributing to technological advancements and industry solutions. The institute's emphasis on entrepreneurship has led to the creation of numerous successful tech startups.</p>
          </div>
        </div>
        
        <div className='content-row'>
          <div className='text-content'>
            <h2>Infrastructure Development</h2>
            <p>IIT Kharagpur boasts state-of-the-art facilities, including modern laboratories, advanced research centers, and comprehensive library resources. Its sprawling campus includes residential complexes, sports facilities, and recreational areas. The campus has implemented various green initiatives to promote sustainability.</p>
          </div>
          <img src={nehruMuseum} alt="Infrastructure Development" className='section-image' />
        </div>
        
        <div className='content-row'>
          <img src={Building} alt="Industry Collaboration" className='section-image' />
          <div className='text-content'>
            <h2>Industry Collaboration and Consultancy</h2>
            <p>IIT Kharagpur has strong ties with industry leaders and regularly collaborates on research projects, consultancy, and internships. The institute has a dedicated technology transfer office that facilitates the commercialization of research outputs.</p>
          </div>
        </div>
        
        <div className='content-row'>
          <div className='text-content'>
            <h2>Awards and Honors</h2>
            <p>Faculty and students of IIT Kharagpur have received numerous prestigious awards and honors, including Shanti Swarup Bhatnagar Prizes, Padma Awards, and various national and international fellowships. Students regularly excel in national and international competitions, hackathons, and conferences.</p>
          </div>
          <img src={sports} alt="Awards and Honors" className='section-image' />
        </div>
        
        <div className='content-row'>
          <img src={alumni} alt="Community Outreach" className='section-image' />
          <div className='text-content'>
            <h2>Community Outreach and Social Impact</h2>
            <p>The institute has initiated several programs aimed at rural development and social upliftment, including projects in healthcare, education, and sustainable agriculture. During the COVID-19 pandemic, IIT Kharagpur played a significant role in developing solutions for diagnostics, healthcare equipment, and public health management.</p>
          </div>
        </div>
      </section>
    </div>





   
    <div className='campus-page'>
      <section className='hero' id='campus'>
        <h1>Campus and Infrastructure</h1>
        <p>Explore the world-class facilities and beautiful campus of IIT Kharagpur</p>
      </section>
      
      <section className='campus-section'>
        <div className='grid-container'>
          <div className='grid-item'>
            <img src={image1} alt="Main Building" className='campus-image' />
            <h2>Main Building</h2>
            <p>The iconic main building of IIT Kharagpur, housing administrative offices and various departments.</p>
          </div>
          <div className='grid-item'>
            <img src={library} alt="Central Library" className='campus-image' />
            <h2>Central Library</h2>
            <p>The Central Library, one of the largest technical libraries in Asia, offers extensive resources for research and study.</p>
          </div>
          <div className='grid-item'>
            <img src={researchExcel} alt="Laboratories" className='campus-image' />
            <h2>Advanced Laboratories</h2>
            <p>State-of-the-art laboratories equipped with modern technology for cutting-edge research and innovation.</p>
          </div>
          <div className='grid-item'>
            <img src={sports} alt="Sports Complex" className='campus-image' />
            <h2>Sports Complex</h2>
            <p>The campus boasts a comprehensive sports complex with facilities for various sports and recreational activities.</p>
          </div>
          <div className='grid-item'>
            <img src={hostel} alt="Hostels" className='campus-image' />
            <h2>Student Hostels</h2>
            <p>Comfortable and well-equipped hostels provide a home-like environment for students.</p>
          </div>
        </div>
        
       
      </section>
    </div>
  

    <div className='research-development' id='research'>
  <h2>Research and Development</h2>
  <div className='research-card'>
    <div className='icon'>🔬</div>
    <div className='info'>
      <h3>Innovative Research</h3>
      <p>Driving groundbreaking discoveries in various fields.</p>
    </div>
  </div>
  <div className='research-card'>
    <div className='icon'>🏆</div>
    <div className='info'>
      <h3>Award-Winning Projects</h3>
      <p>Recognized for excellence and innovation at national and international levels.</p>
    </div>
  </div>
  <div className='research-card'>
    <div className='icon'>🧪</div>
    <div className='info'>
      <h3>State-of-the-Art Facilities</h3>
      <p>Equipped with the latest technology and resources for cutting-edge research.</p>
    </div>
  </div>
  <div className='research-card'>
    <div className='icon'>🌐</div>
    <div className='info'>
      <h3>Global Collaborations</h3>
      <p>Partnering with top institutions and researchers worldwide.</p>
    </div>
  </div>
</div>





    </div>
  );
};

export default History;
