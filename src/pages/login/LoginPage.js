import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
            <LoginPageStyles>
                <header>
                    <h2>Welcome, Please Login.</h2>
                </header>

                <form>
                    <FormControl className="form-control">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="janedoe@gmail.com"
                        />
                    </FormControl>
                    <FormControl className="form-control">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="account password"
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
