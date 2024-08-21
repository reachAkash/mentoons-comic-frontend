import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import './index.css';

type videoData = {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
};

type VideoModalProps = {
    videos: videoData[];
    isOpen: boolean;
    onClose: () => void;
}

const VideoModal : React.FC<VideoModalProps> = ({ videos, isOpen, onClose }) => {
    const [selectedVideo, setSelectedVideo] = useState<videoData | null>(null);

    const handleVideoSelect = (video : videoData) => {
        setSelectedVideo(video);
    };

    const handleBackToList = () => {
        setSelectedVideo(null);
    };
    const handleClose = ()=>{
        setSelectedVideo(null)
        onClose()
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={handleClose}>×</button>
                {selectedVideo ? (
                    <div className="video-player">
                        <button className="back-btn" onClick={handleBackToList}>Back to list</button>
                        <h3>Playing: {selectedVideo.title}'s story with mentoons</h3>
                        <div className="video-wrapper">
                            <video
                                src={selectedVideo.url}
                                controls
                                autoPlay
                                className="video-frame"
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="modal-title">How Mentoons works</h2>
                        <div className="video-list">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="video-item"
                                    onClick={() => handleVideoSelect(video)}
                                >
                                    <div className="video-thumbnail-wrapper">
                                        <video
                                            src={video.url}
                                            className="video-thumbnail-preview"
                                            muted
                                            loop
                                        />
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="video-thumbnail"
                                        />
                                        <div className="play-icon">
                                            <FaPlay />
                                        </div>
                                    </div>
                                    <div className="video-title">How mentoons changed {video.title}'s life</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default VideoModal;
