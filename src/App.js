import "./App.css";
import Webcam from "react-webcam";
import React, { useRef } from "react";
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const handPoseModel = async (webcamRef) => {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: "tfjs",
      modelType: "lite",
    };
    const detector = await handPoseDetection.createDetector(
      model,
      detectorConfig
  )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
          }}
        ></Webcam>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            width:640,
            height:480
          }}
        ></canvas>
      </header>
    </div>
  );
}

export default App;
