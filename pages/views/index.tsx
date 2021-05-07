import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/views/about">
                <a>about...</a>
            </Link>
        </div>
    );
}

export default HomePage;
