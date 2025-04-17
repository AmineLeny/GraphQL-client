import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from './queries/getUser';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_USER, { variables: { id: userId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="user-detail">
      <div className="user-detail__header">
        <h2>{data.user.firstName} {data.user.lastName}</h2>
        <img src={data.user.picture} alt={`${data.user.firstName} ${data.user.lastName}`} />
      </div>
      <div className="user-detail__info">
        <p>Email: {data.user.email}</p>
        <p>Location: {data.user.location.city}, {data.user.location.country}</p>
      </div>
      <div className="user-detail__posts">
        <h3>Posts</h3>
        <ul>
          {data.user.posts.map(post => (
            <li key={post.id}>
              <p>{post.text}</p>
              <div>
                <img width="200px" src={post.image} alt="mypost" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetail;
