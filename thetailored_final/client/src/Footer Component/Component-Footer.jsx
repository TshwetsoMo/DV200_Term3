import React from "react";
import style from "../Footer Component/Style.Footer.module.scss";

const Footer = () => {

    return(
    <footer style={{ padding: '20px', background: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* General Footer Info */}
        <div>
          <h3>Our Company</h3>
          <p>123 Main Street</p>
          <p>City, State, Zip</p>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* About Us */}
        <div>
          <h3>About Us</h3>
          <p>
            Our company specializes in offering the best products and services. We believe in quality, integrity, and value. Join our journey and let's make something amazing together.
          </p>
        </div>

        {/* Social Network Links */}
        <div>
          <h3>Connect with us:</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><a href="https://www.facebook.com" style={{ color: '#fff', marginRight: '10px' }}>Facebook</a></li>
            <li><a href="https://www.twitter.com" style={{ color: '#fff', marginRight: '10px' }}>Twitter</a></li>
            <li><a href="https://www.instagram.com" style={{ color: '#fff', marginRight: '10px' }}>Instagram</a></li>
            <li><a href="https://www.linkedin.com" style={{ color: '#fff', marginRight: '10px' }}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;