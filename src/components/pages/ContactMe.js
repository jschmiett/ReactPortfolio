import React from "react";

export default function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Contact Me!</h2>
                <label for="name">Name:</label>
                <input type="text" id="name"></input>
                <label for="email">Email:</label>
                <input type="text" id="email"></input>
                <label for="message">Message:</label>
                <input type="text" id="message"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}