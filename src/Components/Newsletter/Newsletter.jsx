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
      <input type="email" placeholder="Email" />
      <button>Subscribe</button>
    </div>
  );
};

export default Newsletter;
