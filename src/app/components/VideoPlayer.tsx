'use client'

export default function VideoPlayer() {
    return (
        <div id="video-player" className="flex-10 flex-col text-left">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={() => {
                    const video = document.getElementById('video-player') as HTMLVideoElement;
                    video.play();
                }}
            >
                <source src="/videos/b-roll-footage.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
