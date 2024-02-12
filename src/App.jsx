import React from "react";

/*
 * Implement the user registration form UI
 * Validate the form inputs and display error messages
 * Integrate form submission with a mock API call (simulated delay).
 * Add a success message upon successful registration
 */
export function App(props) {
  const validateForm = () => {};

  return (
    <div className='App'>
      <div className='submission-form'>
        <form>
          <label htmlFor='name'>
            Name
            <input type='text' id='name' name='name' placeholder='Your name' />
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Your Email'
            />
          </label>
          <label htmlFor='phoneNumber'>
            Phone Number
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Your Phone Number'
            />
          </label>
        </form>
        {/* Input Field=> name, type, placeholder, label */}
      </div>
    </div>
  );
}

// Log to console
console.log("Hello console");
