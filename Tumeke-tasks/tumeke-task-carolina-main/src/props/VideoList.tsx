
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const VideoList: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>('/assets/videos/video1.mp4');

  const videos = [
    { id: 'video1', src: 'tumeke-task-carolina-main/videos/video1.mp4', label: 'Video 1' },
    { id: 'video2', src: '/tumeke-task-carolina-main/videos/video1.bin', label: 'Video 2' },
  ];

  return (
    <div>
      <div>
        {videos.map((video) => (
          <button key={video.id} onClick={() => setSelectedVideo(video.src)}>
            {video.label}
          </button>
        ))}
      </div>
      <VideoPlayer source={selectedVideo} />
    </div>
  );
};

export default VideoList;