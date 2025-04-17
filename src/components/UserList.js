import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from './queries/getUsers';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { page, limit: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="user-list">
      <h2 className="title">User List</h2>
      <ul className="user-list__items">
        {data.users.data.map(user => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-item__link">
              <div className="user-item__content">
                <h3 className="user-item__name">{user.firstName} {user.lastName}</h3>
                <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} className="user-item__picture" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page <= 1} className="pagination__button">Previous</button>
        <span className="pagination__page">Page {page}</span>
        <button onClick={() => setPage(page + 1)} disabled={data.users.page * data.users.limit >= data.users.total} className="pagination__button">Next</button>
      </div>
    </div>
  );
};

export default UserList;
