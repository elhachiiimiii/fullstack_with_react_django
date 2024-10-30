import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './footer.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        try {
            await axios.post('http://localhost:8000/api/newsletters/', { email });
            toast.success('Subscription successful!');
        } catch (error) {
            toast.error('Error subscribing');
        }
    };
  return (
    
    <div>
         <footer>
      <div class="container">
        <div class="footer-content">
          <div class="links">
            <h2>Quick Links</h2>
            <p>home</p>
            <p>courses</p>
            <p>blogs</p>
            <p>team</p>
          </div>
          <div class="contact">
            <h2>Contact Info</h2>
            <p>0682155648</p>
            <p>              <a href="mailto:abdelahhachimi11@gmail.com">abdelahhachimi11@gmail.com</a>
</p>
            <p>Salé - Morocco</p>
          </div>
          <div class="follow">
            <h2>Follow Us</h2>
          <p><a href="https://www.facebook.com">facebook</a></p>  
            <p><a href="https://twitter.com">twitter</a></p>  
             <p> <a href="https://www.instagram.com">instagram</a></p>
             <p><a href="https://www.linkedin.com">linkedin</a></p> 
          </div>
          <div class="news">
            <h2>Newsletter</h2>
            <p>subscribe for latest updates</p>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
        <div class="Created">By <span>Abdellah El Hachimi</span></div>
      </div>
    </footer>
    </div>
  )
}

export default Footer