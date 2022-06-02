import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_fthls14', 'template_q59r0jq', form.current, 'nDz1FcThApztcRH-T')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

  return (
    <section id="contact">
      <h5> Get in Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Contact Option 1: */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>r.kirk430@gmail.com</h5>
            <a href="mailto:r.kirk430@gmail.com" target = "_blank"> Send me an Email </a>
          </article>
          {/* Contact Option 2: */}
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin Message</h4>
            <h5>RJ Kirk</h5>
            <a href="https://m.me/rj.john.12/" target = "_blank"> Send a Message </a>
          </article>
          {/* Contact Option 3:  */}
          <article className="contact__option">
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>+1-609-610-2803</h5>
            <a href="#"> Call Me </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact