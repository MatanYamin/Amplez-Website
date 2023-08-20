import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import config from "../configur";
import txt from "../app-ads.txt"

function Contact() {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();

    const servicesID = config.servicesID;
    const templatID = config.templatID;
    const userID = config.userID;

    const onSubmit = (data, r) => {
        sendEmail(
            servicesID,
            templatID,
            {
                email: data.email,
                message: data.message
            },
            userID
            )
            r.target.reset()
    }

    const sendEmail = (servicesID, templatID, variables, userID) => {
        emailjs.send(servicesID, templatID, variables, userID)
          .then(() => {
            setSuccessMessage("Your message sent successfully! we'll contact you as soon as possible.")
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id='contactus'>
            <h3>Contact Form</h3>
            <span className="success-message">{successMessage}</span>    
            <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contactus-input">
                        {/* NAME INPUT */}
                        <input
                        type="email"
                        placeholder='Your Mail'
                        name="email"
                        {...register("email", {
                            required: "Please enter your email.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email"
                            }
                          })}
                        />
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div><br/></div>
                        <div className="contactus-input2">
                        <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        {...register("message", {
                            required: "Please enter your message.",
                          })}
                        />
                {/* <input type='email' placeholder='Your Mail' /> */}
                </div>
                        <span className="error-message">
                            {errors.message && errors.message.message}
                        </span>
                <div className="mybtn">
                <button type="submit">Submit</button>
                </div>
                </form>
                {/* <div className="contactus-input"> */}
                {/* <input placeholder="Your Message" /> */}
                {/* </div> */}
                {/* <a href='#'>Continue</a> */}
                {/* <span>zviyemin@gmail.com</span> */}
                {/*  */}
                {/*  */}
            <p className="text-center">
            <span>support@zviyamin.com</span>
            </p>
                <p className="text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Zvi Yamin | All Rights Reserved
            </p>
            <br/>
            <a href="/">HOME</a>
        </div>
    )
}

export default Contact;