import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers'

export default function Form() {
    //Create state variables for the fields in the form
    //We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        //Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //Based on the input type, we set the state of either name, email, or message
        if (inputType === 'name') {
            setName(inputValue);
        }

        if (inputType === 'email') {
            setEmail(inputValue);
        }

        if (inputType === 'message') {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        //preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        //First we check to see if the email is not valid
        //We also want to check that name and message are empty.
        //We want to set an error message to display when needed.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (!name) {
            setErrorMessage('Please enter your name');
            return;
        }

        if (!message) {
            setErrorMessage('Please enter a message');
            return;
        }
        alert(`Hello ${name}! Thank you for contacting me.`)

        //To clear out form after user is done using it
        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div>
            <form className='form'>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='name'
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder='email'
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder='message'
                />
                <button type='button' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );

}
