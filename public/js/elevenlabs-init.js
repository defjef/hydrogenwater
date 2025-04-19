// Initialize ElevenLabs widget with custom audio worklet
document.addEventListener('DOMContentLoaded', async () => {
  // Wait for the ElevenLabs widget to load
  const waitForElevenLabs = setInterval(() => {
    if (window.ElevenLabsConvai) {
      clearInterval(waitForElevenLabs);
      initElevenLabs();
    }
  }, 100);

  async function initElevenLabs() {
    try {
      // Create a custom audio context with our worklet
      const audioContext = new AudioContext();
      
      // Load the audio worklet from GitHub Pages
      await audioContext.audioWorklet.addModule('https://defjef.github.io/hydrogen-water-audio-worklet/audio-concat-processor.js');
      
      // Initialize the ElevenLabs widget with our custom audio context
      window.ElevenLabsConvai.init({
        audioContext: audioContext
      });
      
      console.log('ElevenLabs widget initialized with custom audio worklet');
    } catch (error) {
      console.error('Error initializing ElevenLabs widget:', error);
    }
  }
}); 