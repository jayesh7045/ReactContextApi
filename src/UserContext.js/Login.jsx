// Login.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function Login() {
    const { user, setUser } = useContext(UserContext);

    const handleUsernameChange = (e) => {
        setUser({ ...user, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setUser({ ...user, password: e.target.value });
    };

    return (
        <div>
            <input type="text" value={user.username} onChange={handleUsernameChange} />
            <input type="password" value={user.password} onChange={handlePasswordChange} />
        </div>
    );
}

export default Login;
