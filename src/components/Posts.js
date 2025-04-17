import React, { useState } from 'react';
import { GET_POSTS } from './queries/getPosts';
import { useQuery } from '@apollo/client';
import '../index.css'; // Import the CSS file

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { page: 1, limit: 10, orderBy: 'desc' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="posts-container">
      <h2 className="title">All Posts</h2>
      <div className="posts-list">
        {data.posts.data.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              {post.image && (
                <img
                  className="post-avatar"
                  src={post.owner.picture}
                  alt={`${post.owner.firstName} ${post.owner.lastName}`}
                />
              )}
              <p className="post-author">
                By: {post.owner.firstName} {post.owner.lastName}
              </p>
            </div>
            <h3 className="post-text">{post.text}</h3>
            {post.image && <img className="post-image" src={post.image} alt={post.text} />}
            <div className="post-details">
              <p className="post-likes">Likes: {post.likes}</p>
              <p className="post-tags">Tags: {post.tags.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
