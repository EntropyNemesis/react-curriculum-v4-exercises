import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    try {
      setIsLoading(true);
      setError('');
      const data = await getSinglePost(1);
      setPost(data);
    } catch {
      setError('Sorry, an error has occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Post'}
      </button>
      <div className="content">
        {error && <h2>{error}</h2>}
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
