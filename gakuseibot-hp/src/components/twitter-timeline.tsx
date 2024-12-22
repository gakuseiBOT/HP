'use client';
import React, { useEffect } from 'react';

const TwitterTimeline = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a
            className="twitter-timeline"
            href="https://twitter.com/UniPro_digital?ref_src=twsrc%5Etfw"
            target="_blank" rel="noopener noreferrer"
            data-width="350" data-height="500" data-dnt="true" data-theme="light"
        >
            Tweets by UniPro_digital
        </a>
    );
};

export default TwitterTimeline;