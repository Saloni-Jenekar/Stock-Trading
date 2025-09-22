import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); // React Router hook

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="logo" />
            <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Zerodha cares (CSR)</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            <a href="">Z-Connect blog</a><br />
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            {/* ✅ Navigate to signup page */}
            <button
              onClick={() => navigate("/signup/S")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Open an account
            </button>
            <br />
            <a href="">Fund transfer</a><br />
            <a href="">60 day challenge</a><br />
          </div>
        </div>

        {/* … rest of your disclaimer content … */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          {/* Your disclaimer paragraphs here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
