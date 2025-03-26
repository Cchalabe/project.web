import React, { useRef, useEffect, useState } from 'react';
import { JOINTS_ORDER, BONES } from './constants';

interface SkeletonOverlayProps {
  frames: number[][];
  currentFrame: number;
}

const SkeletonOverlay: React.FC<SkeletonOverlayProps> = ({ frames, currentFrame }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context && frames[currentFrame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawSkeleton(context, frames[currentFrame], dimensions);
      }
    }
  }, [frames, currentFrame, dimensions]);

  const drawSkeleton = (ctx: CanvasRenderingContext2D, frameData: number[], dimensions: { width: number, height: number }) => {
    // Implementa la lógica para dibujar el esqueleto usando frameData y BONES
    // ...
  };

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default SkeletonOverlay;