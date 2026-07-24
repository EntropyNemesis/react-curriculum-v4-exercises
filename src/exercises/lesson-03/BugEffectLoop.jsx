//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// I added an empty array as a second argument for useEffe
// The useEffect is a function that takes two arguments: the effect, and the dependency array.
// The dependency array tells us what values ("dependencies") for which any changes would trigger
// a re-run of the effect. As we learned in the week 3 lesson, an empty dependency array signals
// to Reast that this effect has no dependency values that change, so the effect should only run
// after the initial mount.
