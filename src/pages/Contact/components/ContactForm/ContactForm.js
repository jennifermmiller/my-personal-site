import { useState } from 'react';
import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
import styled from 'styled-components';

const FormContainer = styled.div({
    margin: '6rem 0',
    maxWidth: '420px'
});

const InputContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    ' > label': {
        fontSize: '1.25rem'
    },
    ' > input': {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        padding: '1rem'
    },
    ' > textarea': {
        fontSize: '1.25rem',
        padding: '1rem',
        minHeight: '320px',
        width: '100%'
    },
    ' > input[type="submit"]': {
        background: theme.button,
        border: theme.button,
        borderRadius: '0.25rem',
        color: theme.buttonText
    }
}));

//TODO: add error styes once validation is working
const ErrorContainer = styled.div({

});

init("user_BEkCBtrnJNeaE7c2GdRHB");

// TODO: 
//      validation's not working?
//      counter?
const ContactForm = () => {
    const { errors, handleSubmit, register } = useForm();

    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");
  
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    };

    // TODO: If adding this...need to do add useEffect or something so charsLeft can be reset    
    // const message = watch('message') || "";
    // const messageCharsLeft = 1500 - message.length;

    const sendEmail = () => {
        const form = document.querySelector('#contact-form');
        const statusMessage = document.querySelector('.status-message');

        generateContactNumber();
        
        sendForm('default_service', 'template_xs0kgfv', '#contact-form')
            .then(() => {
                form.reset();
                
                setStatusMessage("Thank you for contacting me! Your message has been sent!");
                statusMessage.className = "status-message success";
                
                setTimeout(()=> setStatusMessage(''), 7000);
            }, function(error) {
                setStatusMessage("Oops! Message failed to send! Please try again later.");
                statusMessage.className = "status-message failure";
                
                // TODO: do something with returned error

                setTimeout(()=> setStatusMessage(''), 7000);
            });
        
    }

    return (
        <FormContainer>
            <div className='status-message'>{statusMessage}</div>
            <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
                <input type='hidden' name='contact_number' value={contactNumber}/>
                <InputContainer>
                    <label htmlFor="userName">Name</label>
                    <input
                        aria-invalid={errors.userName ? "true" : "false"}
                        id="userName" 
                        name="userName"
                        placeholder="Your name"
                        type="text" 
                        ref={register({ required: true, maxLength: 30 })}
                    />
                    <ErrorContainer>
                        {errors.userName && errors.userName.type === "required" && <span>A name is required</span>}
                        {errors.userName && errors.userName.type === "maxLength" && <span>Max length exceeded</span>}
                    </ErrorContainer>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="userEmail">Email</label>
                    <input 
                        aria-invalid={errors.userEmail ? "true" : "false"}
                        id="userEmail"
                        name="userEmail"
                        placeholder="example@email.com"
                        type="text"
                        ref={register({
                            required: 'An email is required.',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid.'
                            }
                        })}
                    />
                    <ErrorContainer>
                        {errors.userEmail && <span>{errors.userEmail.message}</span>}
                    </ErrorContainer>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="subject">Subject</label>
                    <input 
                        id="subject" 
                        name="subject"
                        placeholder="Topic of conversation"
                        type="text" 
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="message">Message</label>
                    <textarea
                        aria-invalid={errors.message ? "true" : "false"}
                        id="message"
                        name="message"
                        placeholder="I would like to speak to Jen about..." 
                        ref={register({
                            required: true,
                            maxLength: 2500
                    })}/>
                    <ErrorContainer>
                        {errors.message && errors.message.type === "required" && <span>A message is required</span>}
                        {errors.message && errors.message.type === "maxLength" && <span>Max length exceeded</span>}
                    </ErrorContainer>
                </InputContainer>
                <InputContainer>
                    <input type="submit" value="Send" />
                </InputContainer>
            </form>
        </FormContainer>
    );
};

export default ContactForm;
