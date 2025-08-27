import React, { useState } from 'react';
import styles from './PricingSection.module.css';

const plans = [
  {
    name: 'Free',
    price: { monthly: 'Free', yearly: 'Free' },
    features: [
      'Up to 5 file uploads/month',
      '500MB storage',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: { monthly: '₹499/mo', yearly: '₹4990/yr' },
    features: [
      'Unlimited file uploads',
      '50GB storage',
      'Advanced analytics',
      'Priority email support',
      'Team collaboration',
    ],
    cta: 'Upgrade',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom Quote', yearly: 'Custom Quote' },
    features: [
      'Unlimited uploads & storage',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 premium support',
      'SSO & advanced security',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.pricingHeader}>
        <h2 className={styles.pricingTitle}>Choose the Plan that Fits You</h2>
        <p className={styles.pricingSubtitle}>Flexible pricing for students, professionals, and teams.</p>
        <div className={styles.toggleWrap}>
          <span className={billing === 'monthly' ? styles.toggleActive : ''}>Monthly</span>
          <label className={styles.toggleSwitch}>
            <input type="checkbox" checked={billing === 'yearly'} onChange={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')} />
            <span className={styles.toggleSlider}></span>
          </label>
          <span className={billing === 'yearly' ? styles.toggleActive : ''}>Yearly</span>
        </div>
      </div>
      <div className={styles.pricingGrid}>
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={
              plan.highlight
                ? `${styles.pricingCard} ${styles.highlight} animate-pop` 
                : `${styles.pricingCard} animate-fadein`
            }
            style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
          >
            {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.planPrice}>{plan.price[billing]}</div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.ctaBtn}>{plan.cta}</button>
          </div>
        ))}
      </div>
      <div className={styles.pricingNote}>Cancel anytime. No hidden fees.</div>
    </section>
  );
};

export default PricingSection; 