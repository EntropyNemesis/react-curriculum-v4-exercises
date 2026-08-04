// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef, useState } from 'react';

export default function FillRefFocus() {
  function focusInput() {}

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

/* Here we added a function that handles the button click by using useRef (defined 
as inputRef) to access the DOM and add focus to the user input field. We add that handler
function with the useRef into the button properties in the return section of the component.

Original code so we can see what changed:

export default function FillRefFocus() {
  function focusInput() {}

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
*/
