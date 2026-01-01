import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("message", formData.message);
    formDataObj.append("access_key", "e6102dce-b54a-4724-89d8-ce255e3a1de8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Error submitting form");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className='contact'>
      <div className="contact-col info-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="Message" />
        </h3>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or simply want to say hello, feel free to reach out to us.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email" />
            artographicateam@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone" />
            012334567
          </li>
          <li>
            <img src={location_icon} alt="Location" />
            123 Gulshan Avenue, Dhaka 1212, Bangladesh
          </li>
        </ul>
      </div>
      
      <div className='contact-col form-col'>
        <div className="contact-form-wrapper">
          <label>Your name</label>
          <input 
            type='text' 
            name='name' 
            placeholder='Enter Your name' 
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label>Phone number</label>
          <input 
            type='tel' 
            name='phone' 
            placeholder='Enter Your phone number' 
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <label>Write your message here</label>
          <textarea 
            name='message' 
            rows='6' 
            placeholder='Enter Your message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <button 
            type='button' 
            className='submit-btn' 
            onClick={onSubmit}
          >
            Submit now 
            <img src={white_arrow} alt="Arrow" />
          </button>
          
          {result && <span className="result-message">{result}</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
