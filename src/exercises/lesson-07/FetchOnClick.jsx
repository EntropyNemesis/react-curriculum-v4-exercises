import './Lesson07Styles.css';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  async function handleClick() {}
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        TODO: Replace me with fetched data when the <code>Get post</code> button
        is clicked
      </div>
    </div>
  );
}
