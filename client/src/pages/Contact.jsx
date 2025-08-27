import React, { useState } from 'react';
import styles from './Contact.module.css';

const initialState = { name: '', email: '', message: '' };

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Get in Touch</h1>
        <p>We’d love to hear your questions, ideas, or feedback.</p>
      </div>
      <div className={styles.contentWrapper}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.error : ''}
              autoComplete="name"
              required
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ''}
              autoComplete="email"
              required
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? styles.error : ''}
              rows={5}
              required
            />
            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
          </label>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
          {submitted && <div className={styles.successMsg}>Thank you! Your message has been sent.</div>}
        </form>
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email:</span>
            <a href="mailto:support@excelinsights.com">support@excelinsights.com</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Phone:</span>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Address:</span>
            <span>123 Analytics Ave, Data City, 12345</span>
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.437-.608 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.102-.775.157-1.186.157-.29 0-.568-.028-.84-.08.57 1.776 2.22 3.07 4.18 3.106A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className={styles.socialIcon}>
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
          </div>
          <div className={styles.mapEmbed}>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Analytics%20Ave%2C%20Data%20City!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="140"
              style={{ border: 0, borderRadius: '10px', marginTop: '1.2rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 