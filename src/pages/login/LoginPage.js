import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(props) {
    let navigation = useNavigate();

    // JS
    function onHandleSubmit(e) {
        e.preventDefault();
        // check the inputs email and password
        // firebase auth signInWithEmailAndPassword
        // true -> Dashboard
        // false -> resubmit
        navigation('/dashboard');
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Login Page</h1>
            </header>

            <form onSubmit={onHandleSubmit}>
                <input type="text" required />
                <button type="submit">Sign In</button>
            </form>
        </>
    );
}

export default LoginPage;
