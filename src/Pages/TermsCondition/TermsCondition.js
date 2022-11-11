import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div>
      <h3>Here is our T and C</h3>
      <p>
        Go back to registration: <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsCondition;
