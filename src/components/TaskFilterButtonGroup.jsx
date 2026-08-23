import { useState } from 'react';

function TaskFilterButtons({ filter, onFilterChange }) {
  return (
    <>
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('completed')}>Completed</button>
      <button onClick={() => onFilterChange('pending')}>Pending</button>
      <p>Current filter: {filter}</p>
    </>
  );
}

export default TaskFilterButtons;
