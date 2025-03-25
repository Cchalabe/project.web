export const loadSkeletonData = async (filePath: string): Promise<number[][]> => {
  const response = await fetch(filePath);
  const buffer = await response.arrayBuffer();
  const float32Array = new Float32Array(buffer);
  const frames: number[][] = [];

  for (let i = 0; i < float32Array.length; i += 50) {
    frames.push(Array.from(float32Array.slice(i, i + 50)));
  }

  return frames;
};