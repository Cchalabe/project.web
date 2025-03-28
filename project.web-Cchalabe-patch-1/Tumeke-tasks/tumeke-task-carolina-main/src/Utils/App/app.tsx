import React, { useState, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import SkeletonOverlay from './components/SkeletonOverlay';
import { loadSkeletonData } from './utils/skeletonUtils';
import './styles.css';

const App: React.FC = () => {
  const [frames, setFrames] = useState<number[][]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    loadSkeletonData('assets/videos/video1.bin').then(setFrames);
  }, []);

  const handleVideoReady = () => {
    // Implementa la lógica para sincronizar los fotogramas del video con los del esqueleto
    // ...
  };

  return (
    <div className="app-video-container">
      <VideoPlayer source="assets/videos/video1.mp4" onReady={handleVideoReady} />
      {frames.length > 0 && <SkeletonOverlay frames={frames} currentFrame={currentFrame} />}
    </div>
  );
};

export default App;