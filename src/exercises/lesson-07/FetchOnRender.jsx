import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useState, useEffect } from 'react';

export default function FetchOnRender() {
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        TODO: Replace me with fetched data when the component renders
      </div>
    </div>
  );
}
