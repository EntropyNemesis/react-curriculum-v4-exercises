// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// In this bug fix, we introduce useState in order for React to track and manage the message values
// using state changes instead of mutating regular variables.  The prop "name" is destructured in the
// initial BugProps function declaration, and its value remains the same throughout the code, though
// it is part of "message" which is managed using setMessage defined in the handleChange function and
// triggered by the user click of a button.  The value only changes one time, because subsequent
// button clicks render the same value (by calling setMessage) each time.
