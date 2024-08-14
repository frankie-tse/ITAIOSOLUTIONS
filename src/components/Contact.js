import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const form = useRef();
  const honeypot = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
  const [submissionsCount, setSubmissionsCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to manage button disable
  const submissionLimit = 3;
  const timeLimit = 60000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    const numberPattern = /^[0-9]{10}$/;
    if (!formData.number.trim()) {
      newErrors.number = 'Phone number is required';
    } else if (!numberPattern.test(formData.number)) {
      newErrors.number = 'Invalid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (formData.honeypot) {
      newErrors.honeypot = 'Spam detected!';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formData.honeypot) {
      console.log('Spam detected, not sending email.');
      return;
    }

    const currentTime = new Date().getTime();
    if (lastSubmissionTime && currentTime - lastSubmissionTime < timeLimit) {
      if (submissionsCount >= submissionLimit) {
        alert(`You have exceeded the submission limit. Please wait a while before trying again.`);
        return;
      }
      setSubmissionsCount(submissionsCount + 1);
    } else {
      setSubmissionsCount(1);
      setLastSubmissionTime(currentTime);
    }

    // Disable the submit button
    setIsButtonDisabled(true);

    emailjs.sendForm('service_4pgutjk', 'template_gda980d', form.current, 'u10ObblGSjvnypZkA')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again.');
      })
      .finally(() => {
        // Re-enable the submit button after 2 seconds
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 10000);
      });

    e.target.reset();
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
  };

  return (
    <div className="p-8 bg-white">
      <Helmet>
        <title>Contact Us - IT AIO Solutions</title>
        <meta name="description" content="Get in touch with IT AIO Solutions for all your IT service needs. We are here to help you." />
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch With Us</h2>
            <p className="text-lg text-center">If you have any questions, feel free to reach out to us. We're here to help!</p>
          </div>
          <div className="md:w-1/2">
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="honeypot"
                ref={honeypot}
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-lg font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
                {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                disabled={isButtonDisabled} // Disable the button when needed
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
