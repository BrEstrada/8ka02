import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from './../../components/appbar';

function DashboardPage(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
            <AppBar />
        </>
    );
}

export default DashboardPage;
