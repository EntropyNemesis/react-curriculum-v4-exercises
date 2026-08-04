import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

/* Here we have improved the setCount function, and created a callback called 
onIncrement that we pass to Child.jsx as a prop. We specify in this prop that
onIncrement runs the increment function.

Original code so we can see what changed:

import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child />
    </div>
  );
}

*/
