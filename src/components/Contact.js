import React,{useRef, useState} from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// custom imports
import { social } from '../data/data';
import Alert from './Alert';
import {useGlobalContext} from '../context'

const Contact = () => {

    const formRef = useRef(null);
    const {refContactName, refContactSubject, refContactEmail, refContactMessage, alert, showAlert} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!refContactName.current.value && !refContactSubject.current.value && !refContactEmail.current.value && !refContactMessage.current.value) {
          showAlert(true, 'danger', 'Please fill all fields.');

        } else{
          emailjs.sendForm('service_yxrqmok', 'template_yhhuqvc', formRef.current, 'user_1e1EwwXdIiDGQUSvUNGbg')
          .then((result) => {
              console.log(result);
              showAlert(true, 'success', 'Email sent successfully.');
          }, (error) => {
              console.log(error);
              showAlert(true, 'danger', 'Email sent faield try again.');
          });
        }
    }

    return(
      <ContactContainer>
        <section id="content-section">
            <div className="contact-center">
                <h2 className="contact-title">contact me</h2>
                <div className="contact-form-center">

                    <ul className='contact-soial-icons'>
                        {social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                            <li key={id}>
                                <a target="_blank" href={url}>{icon}</a>
                            </li>
                            );
                        })}
                    </ul>

                    <div className="contact-form">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name="user_name" ref={refContactName}/>
                            <input type="text" placeholder='Subject' name="user_subject" ref={refContactSubject} />
                            <input type="text" placeholder='Email' name="user_email"  ref={refContactEmail}/>
                            <textarea placeholder='Message' name="message" id="" rows="5" ref={refContactMessage}></textarea>
                            <input className="btn" type="submit" value="Send" />

                            {/* load aleart */}
                            <div>{alert.show && <Alert {...alert} removeAlert={showAlert} />}</div>
                        </form>
                    </div>
                </div>
                <div className="contact-back">
                </div>
            </div>
        </section>
      </ContactContainer>

    );
}

const ContactContainer = styled.section`

.contact-center {
    display:grid;
    grid-template-areas: 
      "title"
      "form-center"
      "back";
  
    grid-template-rows: 5rem auto 2rem;   
    gap:1rem;
    justify-items: center;
    align-items: center;
    /* margin: 0 1rem; */
    height: 100%;
    width: auto;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top:3rem solid transparent;
  }
  .contact-title{
    grid-area: title;
    border-bottom: .2rem solid var(--hover-color);
    margin-top: 1rem;
  }
  .contact-back{
    grid-area: back;
    background:var(--hover-color);
    margin: 0;
    display: flex;
    width: 100vw;
    height: 100%;
    font-size: var(--h4-font-size);
    color: var(--body-color);
    align-items: center;
    justify-content: center;
  }
  
  .contact-form-center{
    grid-area: form-center;
    display:grid;
    grid-template-columns: 4rem auto;
  
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    width: 100vw;
    height: 100%;
  }
  
  .contact-soial-icons{
    margin: 0 .5rem;
    height: 100%;
  
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    gap: 2rem;
  
    font-size: var(--h3-font-size);
  }
  .contact-soial-icons a {
    margin: 0 0.5rem;
    color: var(--first-color-light-medium);
    transition: var(--transition);
  }
  .contact-soial-icons a:hover {
    color: var(--hover-color);
    font-weight: bold;
  }
  
  
  .contact-form form{
    margin: 0 .5rem;
    height: 100%;
    display:grid;
    grid-template-rows: auto;
  
  }
  .contact-form form input{
    height: 2.5rem;
    padding:.5rem;
    border: none;
    border-bottom: 1px solid var(--hover-color);
    font-size: var(--h4-font-size);
  }
  .contact-form form textarea{
    padding:.5rem;
    border: none;
    border: 1px solid var(--hover-color);
    font-size: var(--h4-font-size);
  }
  .contact-form form .btn{
    width: 10rem;
    height: 3rem;
  }
  .message.color-green{
    rgb(69, 189, 83);
  }
  .message.color-red{
    color:rgb(189, 69, 69);
  }
  
  
  @media screen and (min-width: 768px){
    .contact-form-center{
      grid-area: form-center;
      display:grid;
      grid-template-columns: 6rem auto;
      gap: 1rem;
      padding: 0.5rem;
      overflow: hidden;
      // border-top:7rem solid transparent;
    }
    
    .contact-soial-icons{
      margin: 1rem;
    }
    
    .contact-form form{
      margin: 1rem;
    }
  }
`

export default Contact;