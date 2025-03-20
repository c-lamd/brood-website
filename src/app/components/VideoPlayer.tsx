'use client'
import { useRef, useEffect } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.error("Error playing video:", err);
            });
        }
    }, []);

    return (
        <div className="flex-1 flex flex-col text-left h-full animate-fadeIn-1000" aria-label='Featured Barista video'>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label='B-roll showcase video featuring latte art and baristas working'
            >
                <source src="/videos/b-roll-footage.mp4" type="video/mp4" />
                {/* <source src="/videos/b-roll-footage-white-intro.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
            
            {/* Text description of video content */}
            <div className="sr-only">
                This video showcases a Porsche vehicle, highlighting its exterior design, performance features, and dynamic movement on the road.
            </div>
        </div>
    );
};
