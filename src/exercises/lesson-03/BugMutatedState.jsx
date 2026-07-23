// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The original handleAdd() function read:
//
//   function handleAdd() {
//      count++;
//      setCount(count);
//   }

//Here, I used functional updating to prevent stale state, because each time the useState function
// runs, it will automatically use the previous value, while still keeping the original value the
// same instead of mutating it in place.
