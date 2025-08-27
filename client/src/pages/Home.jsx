import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import PricingSection from '../components/PricingSection';

const features = [
  {
    icon: '📤',
    title: 'Upload Instantly',
    desc: 'Upload Excel files with a single click and get started right away.'
  },
  {
    icon: '📊',
    title: 'Interactive Charting',
    desc: 'Visualize your data with beautiful, interactive charts.'
  },
  {
    icon: '📝',
    title: 'Smart Summaries',
    desc: 'Get automatic insights and summaries from your data.'
  }
];

const Home = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);
    setTimeout(() => setMainVisible(true), 400);
  }, []);

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}>
        <h1 className={styles.title}>Excel Analytics</h1>
        <p className={styles.tagline}>Analyze Excel Like a Pro</p>
        <div style={{ margin: '1.5rem 0' }}>
          <Link
            to="/login"
            className={`${styles.button} ${styles.buttonPrimary}`}
          >Login</Link>
          <Link
            to="/signup"
            className={`${styles.button} ${styles.buttonSecondary}`}
          >Sign Up</Link>
        </div>
      </header>
      <main className={`${styles.main} ${mainVisible ? styles.mainVisible : ''}`}>
        <h2 style={{ fontSize: '2.3rem', color: '#1a202c', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-1px' }}>Key Features</h2>
        <div className={styles.features}>
          {features.map((f, i) => (
            <div
              key={i}
              className={styles.featureCard}
              onClick={() => navigate('/login')}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 32px #a5b4fc'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px #e0e7ef'; }}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.demo}>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHFpdjNzbjM4enhyN3FicWRjNTk2dWgxNjVxejgzZjh0ODZvcmoyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TJP7EH5i1fB2rKeWbf/giphy.gif" alt="Excel Analytics" className={styles.demoImg} />
        </div>
      </main>
      <PricingSection />
    </div>
  );
};

export default Home;
