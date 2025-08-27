import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => (
  <div className={styles.aboutPage}>
    <section className={styles.headerSection}>
      <h1>About ExcelInsights</h1>
      <p className={styles.mission}>
        Our mission is to make Excel data analysis easy, fast, and accessible for everyone — from students to professionals.
      </p>
    </section>
    <section className={styles.whatWeDoSection}>
      <h2>What We Do</h2>
      <ul className={styles.featuresList}>
        <li>
          <span className={styles.icon}>
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="2" y="8" width="8" height="16" rx="2" fill="#2563eb"/><rect x="12" y="4" width="8" height="24" rx="2" fill="#38bdf8"/><rect x="22" y="12" width="8" height="8" rx="2" fill="#6366f1"/></svg>
          </span>
          Easy Excel Uploads
        </li>
        <li>
          <span className={styles.icon}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12l2.5 2.5L16 9" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Automatic Data Insights
        </li>
        <li>
          <span className={styles.icon}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#2563eb" strokeWidth="2"/><path d="M7 17V7M12 17V7M17 17V7" stroke="#38bdf8" strokeWidth="2"/></svg>
          </span>
          Interactive Charts
        </li>
        <li>
          <span className={styles.icon}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#2563eb" strokeWidth="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#38bdf8" strokeWidth="2"/></svg>
          </span>
          Exportable Reports
        </li>
      </ul>
    </section>
    <section className={styles.whyChooseSection}>
      <h2>Why Choose Us?</h2>
      <ul className={styles.whyList}>
        <li>⚡ Fast and Reliable</li>
        <li>🔒 Secure and Private</li>
        <li>👌 Easy to Use</li>
      </ul>
    </section>
    <section className={styles.devsSection}>
     <div className="developer"><h2>Meet the Developers</h2>
      <div className={styles.devCardsWrapper}>
        <div className={styles.devCard}>
          <div className={styles.profilePic}>
               <img src="/profile_pic/souvik_photo.jpg" alt="Souvik Gon profile" />
          </div>
          <div className={styles.devName}>Souvik Gon</div>
          <div className={styles.devRole}>Frontend Developer</div>
          <a href="https://github.com/souvikgon377" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
        </div>
        <div className={styles.devCard}>
          <div className={styles.profilePic}>
          <img src="/profile_pic/anand_photo.jpg" alt="Anand Tiwari" />
          </div>
          <div className={styles.devName}>Anand Tiwari </div>
          <div className={styles.devRole}>Backend Developer</div>
          <a href="https://github.com/AnandTiwary20" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
        </div>
        <div className={styles.devCard}>
          <div className={styles.profilePic}>
          <img src="/profile_pic/ankit_photo.jpeg" alt="Ankit Singh Adhikari" />
          </div>
          <div className={styles.devName}>Ankit Singh Adhikari</div>
          <div className={styles.devRole}>Full Stack Developer</div>
          <a href="https://github.com/AnkitAdhikari07" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
        </div>
        <div className={styles.devCard}>
          <div className={styles.profilePic}>
            <img src="/profile_pic/uttara_photo.jpeg" alt="Uttara Balpande" />
          </div>
          <div className={styles.devName}>Uttara Balpande</div>
          <div className={styles.devRole}>UI/UX Designer</div>
          <a href="https://github.com/Uttarab04" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
        </div>
        </div> 
      </div>
    </section>
    <section className={styles.ctaSection}>
      <h3>Ready to get started?</h3>
      <Link to="/signup" className={styles.ctaBtn}>Sign Up Now</Link>
    </section>
  </div>
);

export default About; 