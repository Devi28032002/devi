
import React, { useState } from 'react';
import './Announcement.css';

const Announcement = () => {
  // Announcements data
  const announcements = [
    {
      title: 'National Colloquium on Legal Research',
      date: 'AUG 09, 2023',
      department: 'Rajiv Gandhi School of Intellectual Property Law',
      description: 'Abstract Submission date extended till 2nd July 2023',
      category: 'department',
    },
    {
      title: 'National Conference on Legal Education',
      date: 'FEB 07, 2023',
      department: 'Rajiv Gandhi School of Intellectual Property Law',
      description: 'Integrating Pro Bono Culture for Better Access to Justice',
      category: 'department',
    },
    {
      title: 'National Colloquium on Legal Research',
      date: 'AUG 19, 2023',
      department: 'Rajiv Gandhi School of Intellectual Property Law',
      description: 'Abstract Submission date extended till 2nd July 2023',
      category: 'department',
    },
    {
      title: 'National Colloquium on Legal Research',
      date: 'MAY 29, 2024',
      department: 'Rajiv Gandhi School of Intellectual Property Law',
      description: 'Abstract Submission date extended till 2nd July 2023',
      category: 'department',
    },
    {
      title: 'Sur-o-Srishti Workshop',
      date: 'MAR 15, 2024',
      department: 'Academy of Classical and Folk Arts',
      description: 'Two-day workshop on "The Science of Making Indian Music".',
      category: 'faculty',
    },
    {
      title: 'New Semester Begins',
      date: 'AUG 07, 2023',
      department: 'Ocean Engineering and Naval Architecture',
      description: 'The new semester starts on September 1st. Check your schedule and be prepared.',
      category: 'faculty',
    },
    {
      title: 'New Semester Begins',
      date: 'JAN 07, 2023',
      department: 'Ocean Engineering and Naval Architecture',
      description: 'The new semester starts on September 1st. Check your schedule and be prepared.',
      category: 'faculty',
    },
    {
      title: 'New Semester Begins',
      date: 'JAN 27, 2023',
      department: 'Ocean Engineering and Naval Architecture',
      description: 'The new semester starts on September 1st. Check your schedule and be prepared.',
      category: 'faculty',
    },
   
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter announcements based on category and search term
  const filteredAnnouncements = announcements.filter((announcement) => {
    return (
      (selectedCategory === 'all' || announcement.category === selectedCategory) &&
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="announcement-page">
      <header className="announcement-header">
        <h1>College Announcements</h1>
        <p>Stay updated with the latest news and events.</p>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="department">Department</option>
            <option value="faculty">Faculty</option>
          </select>
          <button className="searbutton">Search</button>
        </div>
      </header>

      <section className="announcement-list">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement, index) => (
            <div key={index} className="announcement-card">
              <div className="card-date">
                <span className="month">{announcement.date.split(' ')[0]}</span>
                <span className="day">{announcement.date.split(' ')[1]}</span>
                <span className="year">{announcement.date.split(' ')[2]}</span>
              </div>
              <div className="card-content">
                <h2>{announcement.title}</h2> 
                <p>{announcement.description}</p>
                <p className="card-department">{announcement.department}</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </div>
          ))
        ) : (
          <p>No announcements found.</p>
        )}
      </section>

      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Announcement;
