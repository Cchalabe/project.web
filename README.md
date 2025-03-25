### Task:
- Hello! This task is a frontend project that's a boiled down version of one the key components of our frontend stack. In this project, you'll be working on developing a video player that draws a 2D skeleton on top of the person that is present in the footage. You're given the video file and the joint data, and are expected to put together the rest of the components that create the dynamic rendering. Ideally, for each frame of the video, the corresponding skeleton should be displayed. The final implementation should look like the screenshots at the bottom of the README. (skeleton colors and bone widths may not match)

### Implementation:
- For displaying the video (`public/assets/videos/video1.mp4`) use any video component
- For displaying the skeleton (`public/assets/videos/video1.bin`) use the svg or canvas component (for react-native, it is also possible to use the Skia component)
- Video playback should start immediately after loading the video and loading the skeleton
- Video should be located inside the `App-video-container` block and centered
- `App-video-container` container should not be changed (maximum width - `640px`, height `700px`, when the page size is reduced, the width can decrease, the height remains `700px`. If browser window width is larger than `640px`, this video width should be `640px`)
- When scaling the page (changing the orientation of the device), the skeleton should also scale on the video
- Displaying the skeleton over the video should be as smooth as possible
- The app should work on any other videos with the correct set of joints

### Description of the structure of the joint file (`public/assets/videos/video1.bin`):
- The binary file is a set of float32 points (4 bytes) following each other
- Each frame contains 25 joints (50 `x/y` points ) or 200 bytes (50 * 4). Total 708 frames (same as in the video)
- The name, order of joints and pairs for bones are described in the `constants.ts` file
- Joint coordinates (`x/y`) are relative (from `0` to `1`)
- If the value of the joint coordinate is `-1`, then it doesn't need to be displayed on the screen.

### Additional requirements:
- The code must be written in TypeScript with the maximum possible typing must be used (avoid `any` and `unknown`) and should pass the `yarn tscheck` check (please avoid disabling ts rules)
- The code must be written in compliance with all `eslint` rules and should pass the `yarn lint` check (please avoid adding new rules and disabling existing ones)
- Don't overload your app with unnecessary components. Try to use only the essential components (video, svg/skia, fs, decoder)
- [Web] If browser window width is larger than `640px`, this video width should be `640px` in size.
- [Web] The maximum width for video is always `640px`. When reducing the size of the browser window, the video width should also be reduced.
- [RN] The video should be displayed in full screen width.
- [RN] The app must run on both iOS and Android (but iOS has priority)

### Application template (Web)
- The application template is located in the `src` folder. All additional files should be created in this folder.
- The application is launched by the command `yarn web`

### Application template (RN)
- The application template is located in the `src_app` folder. All additional files should be created in this folder.
- After installing Pods for iOS, run the command `yarn linking` to link assets. `video1.mp4` and `video1.bin` will be added to application assets
- The application is launched by the command `yarn start`

### Expected result
#### Web
![Web](https://gitlab.com/united_developers/tumeke-task-carolina/-/raw/main/web.jpg?ref_type=heads)
#### React-Native
![App](https://gitlab.com/united_developers/tumeke-task-carolina/-/raw/main/app.jpg?ref_type=heads)
