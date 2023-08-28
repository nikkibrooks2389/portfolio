import React, { useState } from 'react';
import styled from 'styled-components';
import { ViewsWrapper } from './ViewsWrapper';
import { slideUpFadeIn, } from '../styles/keyframes';
import NextPageLink from '../Links/NextPageLink.style';
import Button from '../button/Button.style';
import PageHeader from '../pageHeader/PageHeader.styles';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:150px;
  width:80%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width:90%;
 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width:90%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items:center
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    padding-top:120px;
  }

`;

const Message1 = styled.p`
color: ${({ theme }) => theme.colors.secondaryText};
font-family: ${({ theme }) => theme.fonts.secondary};
font-size: 1.3rem;
animation: ${slideUpFadeIn} 0.9s forwards;
  animation-delay: 0.7s;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
   text-align:center
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.2rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 1500px;
  margin: 2rem 0 0 0;
`;

const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  padding: 1rem;
  margin: 0.8rem 0;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background:${({ theme, value }) => theme.mode === "unicorn"
    ? value ? theme.colors.inputBackgroundFocus : "transparent" : value ? theme.colors.inputBackgroundFocus : theme.colors.primaryBackground};  border-radius: 5px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
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
  background:${({ theme, value }) => theme.mode === "unicorn"
    ? value ? theme.colors.inputBackgroundFocus : "transparent" : value ? theme.colors.inputBackgroundFocus : theme.colors.primaryBackground};
  border-radius: 5px;
  animation: ${slideUpFadeIn} 0.9s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
  outline: none;

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.inputBackgroundFocus};
    opacity:.4;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }

    @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
  }
`;

const FormButtonsWrapper = styled.div`
margin-top:1.5rem;
  display:flex;
  animation: ${slideUpFadeIn} 0.9s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    
    justify-content:center;
  }

`;

const FormResponseMessage = styled.p`
  color: ${({ theme, color }) => color === "green" ? theme.colors.success : theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 5px;
  margin-top: 40px;
  font-weight:semi-bold;
  text-align: center;
  background: ${({ theme, color }) => color === "green" ? theme.colors.successBackground : theme.colors.errorBackground};
  transition: opacity 0.3s ease-in-out;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
  }
`;

const EmailLink = styled.a`
  color: ${({ theme, color }) => color === "accent" ? theme.colors.secondaryAccent : theme.colors.error};
  text-decoration:${({ color }) => color === "accent" && "none"};
  font-weight:${({ color }) => color === "accent" && "bold"};
  &:hover {
    text-decoration:${({ color }) => color === "accent" && "none"};
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
      await fetch(endpoint, requestOptions);


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
        <PageHeader>Contact.</PageHeader>

        <Message1>
          Drop me a message through the form below or simply email me at  <EmailLink color={"accent"} href="mailto:nbrooks2389@gmail.com">nbrooks2389@gmail.com</EmailLink>.
        </Message1>
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
            <Button type="submit" variant="secondary">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
            <Button variant="text" onClick={handleClearForm} >
              Clear Form
            </Button>
          </FormButtonsWrapper>
          <FormResponseMessage visible={successMessageVisible} color="green">
            Your message was successfully sent! Thank you for reaching out. I'll respond as soon as possible.
          </FormResponseMessage>
          <FormResponseMessage visible={errorMessageVisible} color="red">
            An error occurred while sending your message. Please try again later.
            If the problem persists, please <EmailLink color={"error"} href="mailto:nbrooks2389@gmail.com">contact me via email</EmailLink>.
          </FormResponseMessage>
        </ContactForm>
        <NextPageLink to="/" animationDelay="1s">Back to Home</NextPageLink>
      </ContactContainer>
    </ViewsWrapper>
  );
};

export default Contact;