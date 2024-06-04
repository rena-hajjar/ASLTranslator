import * as handposeDetection from '@tensorflow-models/hand-pose-detection';

async function DetectHandpose() {
    const model = handposeDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
        runtime: 'tfjs',
        modelType: 'lite'
    };
    const detector = await handposeDetection.createDetector(model, detectorConfig);

    
}

export default DetectHandpose;