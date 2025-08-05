import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6102dce-b54a-4724-89d8-ce255e3a1de8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message
                <img src={msg_icon} lt="" />
            </h3>
            <p>
            We’d love to hear from you! Whether you have a question, feedback, or simply want to say hello, feel free to reach out to us.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />
                artographicateam@gmail.com
                </li>
                <li>
                <img src={phone_icon} alt="" />
                012334567
                </li>
                <li>
                <img src={location_icon} alt="" />
                123 Gulshan Avenue, Dhaka 1212, Bangladesh
                </li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type='text' name='name' placeholder='Enter Your name' required/>
            <label >Phone number</label>
            <input type='tel' name='phone' placeholder='Enter Your phone number' required/>
            <label >Write your messages here</label>
            <textarea type='message' name='phone' rows='6' placeholder='Enter Your message' required></textarea>
            <button type='submit' className='btn dark-btn' > Submit now <img src={white_arrow} alt="" /></button>
            <span>{result}</span>
          </form>
        </div>
      
    </div>
  )
}

export default Contact
