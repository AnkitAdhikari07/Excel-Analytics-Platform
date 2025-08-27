import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footerWrapper}>
    <div className={styles.footerCard}>
      <div className={styles.leftSection}>
        <div className={styles.logoRow}>
          <div className={styles.logoIcon}> {/* Placeholder for logo */}
            <svg width="38" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="8" width="8" height="16" rx="2" fill="#2563eb"/>
              <rect x="12" y="4" width="8" height="24" rx="2" fill="#38bdf8"/>
              <rect x="22" y="12" width="8" height="8" rx="2" fill="#6366f1"/>
            </svg>
          </div>
          <span className={styles.logoText}>ExcelInsights</span>
        </div>
        <p className={styles.description}>
          ExcelInsights provides analytics and utilities to help you create beautiful and responsive reports from your Excel data quickly and efficiently.
        </p>
        <div className={styles.socials}>
          <a href="#" aria-label="Twitter" className={styles.socialIcon}>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.437-.608 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.102-.775.157-1.186.157-.29 0-.568-.028-.84-.08.57 1.776 2.22 3.07 4.18 3.106A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
          </a>
          <a href="https://github.com/AnkitAdhikari07/Excel-Analytics-Platform" aria-label="GitHub" className={styles.socialIcon}>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
          </a>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.linkCol}>
          <div className={styles.colTitle}>PRODUCT</div>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#integrations">Integrations</a>
          <a href="#updates">Updates</a>
        </div>
        <div className={styles.linkCol}>
          <div className={styles.colTitle}>COMPANY</div>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.linkCol}>
          <div className={styles.colTitle}>RESOURCES</div>
          <a href="#docs">Docs</a>
          <a href="#community">Community</a>
          <a href="#support">Support</a>
          <a href="#security">Security</a>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
    &copy; {new Date().getFullYear()} Excel Insights &mdash; <a href="mailto:contact@excelanalytics.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
    <span className={styles.footerSpan}> Made in India With ❤️</span>
    </div>
  </footer>
);

export default Footer; 