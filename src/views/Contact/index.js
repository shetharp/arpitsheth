import React, { Component } from 'react';
import Header from "components/Header/";
import Footer from "components/Footer/";
import './Contact.css';

import ImgContact from './img/arpit-sheth-contact.jpg';
import ImgContact_lg from './img/arpit-sheth-contact@lg.jpg';
import ImgContact_sm from './img/arpit-sheth-contact@sm.jpg';
import ImgContact_xs from './img/arpit-sheth-contact@xs.jpg';

let ImgSet =
  ImgContact + " 1500w, " +
  ImgContact_lg + " 3000w, " +
  ImgContact_sm + " 1000w, " +
  ImgContact_xs + " 600w, ";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Header/>
        <main className="content">
          <article className="contact-wrapper">
            <img src={ImgContact} srcSet={ImgSet} alt="Contact Arpit Sheth" className="contact-img"/>
          
            <div className="contact-info">
              <h1 className="contact-heading">Nice to meet you!</h1>
              <ul className="contact-options">
                <li><a href="mailto:shetharp@gmail.com"><i className="fa fa-envelope"></i> shetharp@gmail.com</a></li>
                <li><a href="https://linkedin.com/in/shetharp"><i className="fa fa-linkedin"></i> /shetharp</a></li>
                <li><a href="https://instagram.com/shetharp"><i className="fa fa-instagram"></i> @shetharp</a></li>
              </ul>  
          
            {
            // <h1>Heading 1</h1>
            // <h2>Heading 2</h2>
            // <h3>Heading 3</h3>
            // <h4>Heading 4</h4>
            // <h5>Heading 5</h5>
            // <h6>Heading 6</h6>
            //
            // <p>
            //   Hi there, my name is Arpit.
            //   Welcome to my <a href="#">contacts</a> page.
            //   Here you will find the information you need in order to contact me
            //   and spark a conversation.
            //   Do not hesitate to reach out!
            //   Looking forward to hear from you.
            // </p>
            // <p>
            //   Also, here is another paragraph describing what is acceptable and what is not.
            //   Just so we are all on the same page, I started this project four months ago.
            //   It is about time we wrap it up!
            // </p>
            }
            </div>
          </article>  
      </main>
      <Footer />
      </div>
    );
  }
}

export default Contact;
