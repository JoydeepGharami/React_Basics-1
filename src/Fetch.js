import React from 'react';
import CustomHook from './CustomHook';

const Fetch = () => {
  const [users] = CustomHook();
  console.log(users);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            <a href={user.html_url}>{user.login}</a> {/* sirf string render kar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
