import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your Flask API endpoint
    fetch('/user') // Replace with the actual URL of your Flask API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved user data in the state
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.user_name} {user.user_surname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;