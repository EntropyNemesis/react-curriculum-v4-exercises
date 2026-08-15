import { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfileSection.jsx';
import TaskFilterButtons from '../../components/TaskFilterButtonGroup.jsx';
import TaskItem from '../../components/TaskItem.jsx';

export default function StudentWork() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  //  #1: Data fetching + state + UI logic all mixed together
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // #2: Filtering logic inside component
  let visibleTasks = tasks;
  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable 
      <h2>Welcome, Student</h2> */}
      <UserProfile />

      {/* #4: Repeated button JSX */}
      <div>
        <TaskFilterButtons filter={filter} onFilterChange={setFilter} />
        {/*}  <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <p>Current filter: {filter}</p>  */}
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
          /*
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li> 
        */
        ))}
      </ul>
    </div>
  );
}
