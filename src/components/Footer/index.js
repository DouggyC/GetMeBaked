import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="row-fluid justify-content-center text-center pt-2 pb-1">
        <div className="col">
          <div id="footer-title">Get Me Baked</div>
          <div className="copyright pt-2">

            <p style={{ fontSize: "0.8rem", marginBlockEnd: 0 }}>Powered by <b>Lightning in a Bottle</b></p>
            <p className="" style={{ fontSize: "0.5rem" }}>
              Copyright &copy;2020 All rights reserved | This template is made
              with <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
