import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useState, useEffect } from 'react';

export default function FetchOnRender() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError('');
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Sorry, there was an error with that request');
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
