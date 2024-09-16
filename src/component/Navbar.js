

import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props){

    
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.text}
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a aria-current="page" className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
             
{/*               
              <li className="nav-item">
                <a aria-disabled="true" className="nav-link disabled">
                  Disabled
                </a>
              </li> */}
            </ul>
            </div>
        <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input
    className="form-check-input" type="checkbox"role="switch" id="flexSwitchCheckDefault"
  onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    Enable dark mode
  </label>
</div>
          </div>
   

      </nav>
    );
  
}


