import React, { useState } from 'react';
import styled from 'styled-components';
import { ViewsWrapper } from './ViewsWrapper';
import { slideUpFadeIn, slideInFromRightFadeIn } from '../styles/keyframes';
import NextPageLink from '../Links/NextPageLink.style';
import Button from '../button/Button.style';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:70%;
  padding-top:150px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width:90%;
 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width:90%;
  }

`;

const ContactHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
  opacity: 0;
`;

const EmailMessage = styled.p`
color: ${({ theme }) => theme.colors.secondaryText};
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: 1.3rem;
animation: ${slideInFromRightFadeIn} 0.7s ease forwards;
opacity: 0;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0 3rem 0;
`;

const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  padding: 1rem;
  margin: 0.8rem 0;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background:transparent;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  animation: ${slideUpFadeIn} 0.9s forwards;
  animation-delay: 0.7s;
  opacity: 0;

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.inputBackgroundFocus};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;

const FormTextArea = styled.textarea`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.3rem;
  width: 100%;
  padding: 1rem;
  margin: 0.8rem 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border: 0.1px solid ${({ theme }) => theme.colors.inputBorder};
  background:transparent;
  border-radius: 5px;
  animation: ${slideUpFadeIn} 0.9s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.inputBackgroundFocus};
    opacity:.4;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
`;

const FormButtonsWrapper = styled.div`
  animation: ${slideUpFadeIn} 0.9s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
`;

const Message = styled.p`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryAccent};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrorMessageVisible(false);
    setSuccessMessageVisible(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const showMessage = (messageType) => {
    if (messageType === 'success') {
      setSuccessMessageVisible(true);
      setTimeout(() => setSuccessMessageVisible(false), 10000);
    } else if (messageType === 'error') {
      setErrorMessageVisible(true);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const endpoint = 'https://formspree.io/f/mzbleneo';
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      setLoading(false);
      showMessage('success');
    } catch (error) {
      setLoading(false);
      showMessage('error');
    }
  };

  return (
    <ViewsWrapper>
      <ContactContainer>
        <ContactHeader>Contact.</ContactHeader>
        <EmailMessage>
          Reach out and let's connect! Drop me a message through the form below or simply email me at  <EmailLink href="mailto:nbrooks2389@gmail.com">nbrooks2389@gmail.com</EmailLink>.
        </EmailMessage>
        <ContactForm onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            autoComplete="off"
            onChange={handleInputChange}
          />
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
          <FormTextArea
            name="message"
            value={formData.message}
            rows="4"
            autoComplete="off"
            placeholder="Message"
            required
            onChange={handleInputChange}
          />
          <FormButtonsWrapper>
            <Button type="submit" variant="secondary" style={{ fontSize: '1.2rem', width: "11rem" }}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
            <Button variant="text" onClick={handleClearForm} style={{ fontSize: '1.2rem' }}>
              Clear Form
            </Button>
          </FormButtonsWrapper>
          <Message visible={successMessageVisible} color="green">
            Your message was successfully sent! Thank you for reaching out. I'll respond as soon as possible.
          </Message>
          <Message visible={errorMessageVisible} color="red">
            An error occurred while sending your message. Please try again later.
            If the problem persists, please <EmailLink href="mailto:nbrooks2389@gmail.com">contact me via email</EmailLink>.
          </Message>
        </ContactForm>
        <NextPageLink to="/" animationDelay="1s">Back to Home</NextPageLink>
      </ContactContainer>
    </ViewsWrapper>
  );
};

export default Contact;