import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <Link href="/views/">
                <a>back to home</a>
            </Link>
        </div>
    );
}

export default AboutPage;
