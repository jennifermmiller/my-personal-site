import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { init, sendForm } from 'emailjs-com'
import styled from 'styled-components'

import { mediaQuery, TABLET } from '../../../../constants/breakpoints'

const FormContainer = styled.div({
  margin: '6rem 0',
  maxWidth: '420px',
})

const InputContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2rem',
  ' > input': {
    lineHeight: '1.5rem',
    padding: '1rem',
  },
  ' > textarea': {
    padding: '1rem',
    minHeight: '320px',
    width: '100%',
  },
  ' > input[aria-invalid="true"]': {
    backgroundColor: theme.errorBg,
    borderColor: theme.error,
  },
  ' > textarea[aria-invalid="true"]': {
    backgroundColor: theme.errorBg,
    borderColor: theme.error,
  },
}))

const ErrorContainer = styled.div(({ theme }) => ({
  color: theme.errorText,
  fontStyle: 'italic',
  lineHeight: '1.5rem',
}))

const SubmitButton = styled.button(({ theme }) => ({
  background: theme.button,
  border: theme.button,
  borderRadius: '0.25rem',
  color: theme.buttonText,
  lineHeight: '1.5rem',
  padding: '1rem 2rem',
  width: '100%',
  '&:hover': {
    background: theme.buttonHover,
    border: theme.buttonHover,
    cursor: 'pointer',
  },
  [mediaQuery(`(min-width: ${TABLET})`)]: {
    width: 'auto',
  },
}))

const StatusContainer = styled.div(({ theme }) => ({
  ' > .success': {
    backgroundColor: theme.successBg,
    border: `1px solid ${theme.success}`,
    color: theme.success,
    marginBottom: '3rem',
    padding: '1rem',
  },
  ' > .failure': {
    backgroundColor: theme.errorBg,
    border: `1px solid ${theme.error}`,
    color: theme.error,
    marginBottom: '3rem',
    padding: '1rem',
  },
}))

init(process.env.REACT_APP_EMAILJS_USER_ID)

const ContactForm = () => {
  const { errors, handleSubmit, register } = useForm({ mode: 'onBlur' })

  const [contactNumber, setContactNumber] = useState('000000')
  const [statusMessage, setStatusMessage] = useState('')

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0)
    setContactNumber(numStr.substring(numStr.length - 6))
  }

  const sendEmail = () => {
    const form = document.querySelector('#contact-form')
    const statusMessage = document.querySelector('.status-message')

    generateContactNumber()

    sendForm('default_service', process.env.REACT_APP_EMAILJS_TEMPLATE, '#contact-form').then(
      () => {
        form.reset()

        setStatusMessage('Your message has been sent! Thanks for contacting me!')
        statusMessage.className = 'status-message success'

        setTimeout(() => {
          statusMessage.className = 'status-message'
          setStatusMessage('')
        }, 7000)
      },
      function (error) {
        setStatusMessage('Oops! Message failed to send! Please try again later.')
        statusMessage.className = 'status-message failure'

        // eslint-disable-next-line no-console
        console.error(error.message)

        setTimeout(() => {
          statusMessage.className = 'status-message'
          setStatusMessage('')
        }, 7000)
      }
    )
  }

  return (
    <FormContainer>
      <StatusContainer>
        <p className="status-message">{statusMessage}</p>
      </StatusContainer>
      <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <input type="hidden" name="contact_number" value={contactNumber} />
        <InputContainer>
          <label htmlFor="userName">Name</label>
          <input
            aria-invalid={errors.userName ? 'true' : 'false'}
            id="userName"
            name="userName"
            placeholder="Your name"
            type="text"
            ref={register({ required: true, maxLength: 30 })}
          />
          <ErrorContainer>
            {errors.userName && errors.userName.type === 'required' && (
              <span>Name is required.</span>
            )}
            {errors.userName && errors.userName.type === 'maxLength' && (
              <span>Max length exceeded.</span>
            )}
          </ErrorContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="userEmail">Email</label>
          <input
            aria-invalid={errors.userEmail ? 'true' : 'false'}
            id="userEmail"
            name="userEmail"
            placeholder="example@email.com"
            type="text"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            })}
          />
          <ErrorContainer>
            {errors.userEmail && <span>{errors.userEmail.message}</span>}
          </ErrorContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" placeholder="Topic of conversation" type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="message">Message</label>
          <textarea
            aria-invalid={errors.message ? 'true' : 'false'}
            id="message"
            name="message"
            placeholder="I would like to speak to Jen about..."
            ref={register({
              required: true,
              maxLength: 2500,
            })}
          />
          <ErrorContainer>
            {errors.message && errors.message.type === 'required' && (
              <span>Message is required.</span>
            )}
            {errors.message && errors.message.type === 'maxLength' && (
              <span>Max length exceeded.</span>
            )}
          </ErrorContainer>
        </InputContainer>
        <SubmitButton className="h5" type="submit">
          Send
        </SubmitButton>
      </form>
    </FormContainer>
  )
}

export default ContactForm
