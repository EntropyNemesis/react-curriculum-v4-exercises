export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

/* Here we added 

Original code so we can see what changed:

export default function Child() {
  return <button onClick={() => {}}>Increment Counter</button>;
}

*/
