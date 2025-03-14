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
        <div className="flex-1 flex flex-col text-left h-full">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/videos/b-roll-footage-white-intro.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
