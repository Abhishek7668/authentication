import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const id = location.state?.id || 'Guest'; // Default to 'Guest' if id is not present

    return (
        <div>
            <p>Hello {id} and Welcome to the Home</p>
        </div>
    );
}

export default Home;
