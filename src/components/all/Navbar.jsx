import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">{t('navbar.logo')}</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">{t('home')}</Link></li>
        <li><Link to="/history">{t('history')}</Link></li>
        <li><Link to="/research">{t('research')}</Link></li>
        <li><Link to="/phd">{t('phd')}</Link></li>
        <li><Link to="/seminar">{t('seminar')}</Link></li>
        <li><Link to="/giving">{t('giving')}</Link></li>
        <li><Link to="/ann">{t('announcement')}</Link></li>
      </ul>
      <div className="navbar-lang">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
      </div>
    </nav>
  );
};

export default Navbar;
