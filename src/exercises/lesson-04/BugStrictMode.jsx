// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug:
// Vite project templates automatically include code that activates StrictMode (see main.jsx in src).
// In development (not prod), StrictMode fires the mount, update/cleanup and then re-mount a second
// time to help expose any unintended effects of the written code.  In the original code, the first
// interval was never cleared, so the second mount exposed how a second mount would stack a duplicate
// interval increment each time the function runs, increasing count by 2 instead of 1 for each 1000
// milliseconds. With the issue made apparent by StrictMode, a cleanup could then be added (nested
// return statement) which clears the first interval before adding the next one is created, so only
// one interval runs at a time.
