import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// set up contact form
function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [error, setError] = useState("");
    const { name, email, message } = form;

    const submit = (e) => {
        e.preventDefault();
        if(!error){
            console.log("Submit Form", form);
        }
    };
    // validate email
    const change = (e) => {
        if(e.target.name === "email"){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setError("Please enter a valid email");
            } else {
                setError("");
            }
        }
        if(!error){
            setForm({ ...form, [e.target.name]: e.target.value });
            console.log("Handle Form", form);
        }
    };

    return(
        <section className="my-5">
            <div className="contact-title">
                <h1 className="contact">Want to know more? Contact Us!</h1>
                <iframe src="https://giphy.com/embed/3o6j8wb3IYcVKKJbws" width="240" height="240" frameBorder="0" className="ball-gif" allowFullScreen></iframe>
            </div>    
                <form className="contact-form" onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={change}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={change}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            rows="6"
                            defaultValue={message}
                            onBlur={change}
                            required
                        />
                    </div>
                    {error && (
                        <div>
                            <p className="error-message">{error}</p>
                        </div>
                    )}
                    <button type="submit">Send</button>
                </form>
                <div className="contact-no">
                    Or call / text our instructors: <br></br>
                        Sean: (937)-621-2533 <br></br>
                        Danny: (954)-991-8767 <br></br>
                        Ashley: (954)-868-0688
                </div>
        </section>
    )
}

export default Contact;