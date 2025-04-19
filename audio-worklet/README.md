# Audio Worklet Processor for ElevenLabs

This repository contains an AudioWorklet processor script for use with the ElevenLabs voice interaction widget.

## Usage

Include this script in your ElevenLabs widget implementation:

```javascript
// In your code where you initialize the audio context
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule('https://yourusername.github.io/audio-worklet/audio-concat-processor.js');
```

## Setup for GitHub Pages

1. Create a new repository on GitHub
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select the main branch as the source
5. Save the settings

Your script will be available at: `https://yourusername.github.io/audio-worklet/audio-concat-processor.js`

## License

MIT 