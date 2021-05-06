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

        
        </div>
    );
}

export default MobileMenu;