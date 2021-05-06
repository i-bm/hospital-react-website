import React from 'react';
import { Link } from 'react-router-dom';


function MobileMenu(){
    return(
        <div>
            <div className="mobile-menu">
                <ul>
                <li><Link to="/"><i class="fas fa-home pr-2"></i> Home</Link></li>
                <li><Link to="/doctors"><i class="fas fa-user-md pr-3"></i>Doctors</Link></li>
                <li><Link to="/"><i class="fas fa-wheelchair pr-3"></i> Conditions & Services</Link></li>
                <li><Link to="/about-us"><i class="fas fa-hospital-symbol pr-3"></i> About</Link></li>
                <li><Link to="/contact-us"><i class="fas fa-book-user pr-3"></i> Contact Us</Link></li>
                </ul>
            </div>
  
            <div className="alert alert-primary alert-dismissible" role="alert">
                <div className="container">
  <strong>COVID-19:</strong> <u><Link to="/vaccination-appointment">Schedule a vaccination appointment</Link></u> or <u><Link to="/covid-updates">view our vaccine updates,</Link></u> safety measures, patient and visitor policies and latest information.
  </div>
  <button type="button" className="close"  aria-label="Close">
    <span aria-hidden="true" >&times;</span>
  </button>
</div>
        
        </div>
    );
}

export default MobileMenu;