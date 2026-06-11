import React from 'react';

function FeatureCard({ number, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;