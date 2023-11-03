import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Subscribe to our newsletter</h1>
      <p>
        Subscribe to our newsletter to stay updated with Antique Fists and our
        offers.
      </p>
      <div className="newsletter-form">
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
