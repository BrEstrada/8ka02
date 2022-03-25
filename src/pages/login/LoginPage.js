import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './../../libs/firebase';

import { Label, Input } from './../../ui/forms';
import { SubmitButton } from './../../ui/buttons';

const LoginPageStyles = styled.section`
    margin: 4rem auto 0;
    max-width: 480px;
    header {
        text-align: center;
        font-size: 2rem;
    }
`;

const FormControl = styled.div`
    margin: 1rem 0;
`;

function LoginPage(props) {
    console.log(auth);
    // let navigation = useNavigate();

    // // JS
    // function onHandleSubmit(e) {
    //     e.preventDefault();
    //     // check the inputs email and password
    //     // firebase auth signInWithEmailAndPassword
    //     // true -> Dashboard
    //     // false -> resubmit
    //     navigation('/dashboard');
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onLoginRequest(e) {
        e.preventDefault();
        // Login a user using authentication.
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
            <LoginPageStyles>
                <header>
                    <h2>Welcome, Please Login.</h2>
                </header>

                <form onSubmit={onLoginRequest}>
                    <FormControl className="form-control">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="janedoe@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl className="form-control">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="text"
                            placeholder="account password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <FormControl className="form-control">
                        <SubmitButton
                            type="submit"
                            padding="0.75rem"
                            margin="1rem 0 0"
                            fs="1rem"
                        >
                            Log in to Dashboard
                        </SubmitButton>
                    </FormControl>
                </form>
            </LoginPageStyles>
        </>
    );
}

export default LoginPage;
