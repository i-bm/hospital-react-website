import React from 'react';
import TopInfo from '../components/TopInfo';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';

function Navigation (){
  return(
<div>
<TopInfo />

<nav className="top-nav navbar navbar-expand-lg navbar-light d-none d-md-block d-lg-block">
    <div className="container">
<ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <i className="fal fa-map-marker-alt pr-1"></i> C123 Paradise Street, Asylum Down, Accra, GH
      </li>
      <li className="nav-item">
      <i className="fal fa-clock pr-1 pl-3"></i>Mon - Sat 8.00 - 18.00. Sunday CLOSED
      </li>
    </ul>
    {/* <ul className="navbar-nav">
    <li className="nav-item"><Link to="#"> <i class="fab fa-facebook-f"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i class="fab fa-twitter"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i class="fab fa-linkedin-in"></i></Link></li>
    <li className="nav-item"><Link to="/appointment" className="btn btn-success">Get An Appointment</Link></li>
    </ul> */}
    <Link to="/appointment" className="btn btn-success">Get An Appointment</Link>
    </div>
</nav>



<nav className="main-nav navbar navbar-expand-lg navbar-light d-none d-md-block d-lg-block" style={{backgroundColor: "transparent"}}>
    <div className="container">
  <Link to="/" className="navbar-brand"><img src={Logo} width="200" alt="Logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse1 navbar-collapse1" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/doctors" className="nav-link">Doctors</Link>
      </li>
      
      <li className="nav-item dropdown">
        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Conditions & Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/conditions-and-services/anaesthesia" className="dropdown-item">anaesthesia</Link>
          <Link to="/conditions-and-services/cardiology" className="dropdown-item">cardiology</Link>
          <Link to="/" className="dropdown-item">dentistry</Link>
          <Link to="/" className="dropdown-item">dermatology</Link>
          <Link to="/" className="dropdown-item">dietetics</Link>
          <Link to="/" className="dropdown-item">ear, nose, and throat</Link>
          <Link to="/" className="dropdown-item">endoscopy</Link>
          <Link to="/" className="dropdown-item">family practice clinic</Link>
          <Link to="/" className="dropdown-item">haematology / sickle cell</Link>
          <Link to="/" className="dropdown-item">internal medicine</Link>
          <Link to="/" className="dropdown-item">neurosurgery</Link>
          <Link to="/" className="dropdown-item">obstetrics / gynaecology</Link>
          <Link to="/" className="dropdown-item">ophthalmology</Link>
          <Link to="/" className="dropdown-item">orthopaedics</Link>
          <Link to="/" className="dropdown-item">paediatrics</Link>
          <Link to="/" className="dropdown-item">physiotherapy</Link>
          <Link to="/" className="dropdown-item">plastic surgery</Link>
          <Link to="/" className="dropdown-item">surgery (general)</Link>
          <Link to="/" className="dropdown-item">urology</Link>
          </div>
      </li>
      <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
  );
  }

export default Navigation;

