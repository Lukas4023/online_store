import React, {useState, useEffect} from 'react';

function App() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Make a GET request to your Flask API
        fetch('http://127.0.0.1:5000/user/')
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>User Data</h1>
            <ul>
                {userData.map((user) => (
                    <li key={user.user_id}>
                        <strong>User ID:</strong> {user.user_id}<br/>
                        <strong>Email:</strong> {user.user_email}<br/>
                        <strong>Account Type:</strong> {user.user_account_type}<br/>
                        <strong>Account Status:</strong> {user.user_account_status}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
