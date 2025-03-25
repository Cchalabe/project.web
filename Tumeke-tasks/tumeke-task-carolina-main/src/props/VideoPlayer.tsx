import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  source: string;
  onReady?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ source, onReady }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        if (onReady) {
          onReady();
        }
      };
    }
  }, [onReady]);

 return (
   <video
  ref={"tumeke-task-carolina-main\videos\video1.bin"}
     src={"tumeke-task-carolina-main/videos/video1.mp4"} 
      controls
      style={ width: '100%', maxWidth: '640px' }
    />
   );
 

export default VideoPlayer;
};

