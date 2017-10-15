import React, { Component } from 'react';
import Header from "components/Header/";
import Footer from "components/Footer/";
import './Contact.css';

import ImgContact from './img/arpit-sheth-contact.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Header/>
        <main className="content wrapper">
          <div className="container container--wide">
            <article className="contact-grid">
              <img src={ImgContact} alt="Contact Arpit Sheth" className="contact-img"/>

              <div className="contact-info">
                <h1 className="contact-heading">Nice to meet you!</h1>
                <ul className="contact-options">
                  <li><a href="mailto:shetharp@gmail.com"><i className="fa fa-envelope"></i> shetharp@gmail.com</a></li>
                  <li><a href="https://linkedin.com/in/shetharp"><i className="fa fa-linkedin"></i> /shetharp</a></li>
                  <li><a href="https://instagram.com/shetharp"><i className="fa fa-instagram"></i> @shetharp</a></li>
                </ul>              
              </div>
            </article>          
          </div>
      </main>
      <Footer />
      </div>
    );
  }
}

export default Contact;
