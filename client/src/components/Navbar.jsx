import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const publicLinks = [
  { to: '/', label: 'Home' },
  { to: '#pricing', label: 'Pricing', isAnchor: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
const privateLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/uploadexcel', label: 'Upload' },
  { to: '/reports', label: 'Reports' },
];

const Navbar = ({ isAuthenticated = false, user = { name: 'User' }, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const profileRef = useRef();

  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth scroll to pricing section
  const handlePricingClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const section = document.getElementById('pricing');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('pricing');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles['navbar-logo']}>
        <Link to="/" className={styles['navbar-logo-link']}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: 8}}>
            <rect x="2" y="8" width="8" height="16" rx="2" fill="#2563eb"/>
            <rect x="12" y="4" width="8" height="24" rx="2" fill="#38bdf8"/>
            <rect x="22" y="12" width="8" height="8" rx="2" fill="#6366f1"/>
          </svg>
          <span>ExcelInsights</span>
        </Link>
      </div>
      <div className={styles['navbar-center']}>
        <nav className={`${styles['navbar-links']}${menuOpen ? ' ' + styles.open : ''}`} aria-label="Main navigation">
          {!isAuthenticated ? (
            <>
              {publicLinks.map(link => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href="#pricing"
                    onClick={handlePricingClick}
                    className={styles['navbar-link']}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`${styles['navbar-link']}${location.pathname === link.to ? ' ' + styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {/* Download App button for mobile menu */}
              {isMobile && (
                <a
                  href="https://drive.google.com/file/d/1bCFAGHdT86DmJ1744hqtyeshwY3av4Wv/view?usp=sharing"
                  className={styles['navbar-btn']}
                  style={{ background: 'linear-gradient(90deg, #38bdf8 60%, #2563eb 100%)', color: '#fff', margin: '0.7rem 0 0.2rem 0', display: 'block', textAlign: 'center' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              )}
            </>
          ) : (
            <>
              {privateLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles['navbar-link']}${location.pathname === link.to ? ' ' + styles.active : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </>
          )}
          {/* Show Logout in hamburger menu on dashboard route and mobile */}
          {isAuthenticated && menuOpen && (
            <button className={styles['navbar-btn']} onClick={onLogout} style={{width: '33%', marginTop: '1rem'}}>Logout</button>
          )}
        </nav>
      </div>
      <div className={styles['navbar-actions']}>
        {/* On mobile, never show right-side actions; on desktop, show as before */}
        {!isMobile && (
          <>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className={`${styles['navbar-btn']} ${styles.secondary}`}>Login</Link>
                <Link to="/signup" className={styles['navbar-btn']}>Sign Up</Link>
                <a
                  href="https://drive.google.com/file/d/1bCFAGHdT86DmJ1744hqtyeshwY3av4Wv/view?usp=sharing"
                  className={styles['navbar-btn']}
                  style={{ background: 'linear-gradient(90deg, #38bdf8 60%, #2563eb 100%)', color: '#fff', marginLeft: '0.5rem' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </>
            ) : (
              <div className={`${styles['navbar-profile']}${profileOpen ? ' ' + styles.open : ''}`} ref={profileRef}>
                <button className={styles['profile-icon']} onClick={() => setProfileOpen(v => !v)} aria-haspopup="true" aria-expanded={profileOpen} aria-label="Profile menu">
                  {user.name ? user.name[0].toUpperCase() : 'U'}
                </button>
                <div className={styles['profile-dropdown']} role="menu">
                  <Link to="/profile" className={styles['profile-dropdown-link']} role="menuitem">My Profile</Link>
                  <Link to="/settings" className={styles['profile-dropdown-link']} role="menuitem">Settings</Link>
                  <button className={styles['profile-dropdown-link']} onClick={onLogout} role="menuitem">Logout</button>
                </div>
              </div>
            )}
          </>
        )}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={styles['hamburger-bar']} />
          <span className={styles['hamburger-bar']} />
          <span className={styles['hamburger-bar']} />
        </button>
      </div>
    </header>
  );
};

export default Navbar; 