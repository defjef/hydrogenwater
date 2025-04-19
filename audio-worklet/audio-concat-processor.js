class AudioConcatProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffer = [];
    this.isProcessing = false;
    
    this.port.onmessage = (event) => {
      if (event.data.type === 'concat') {
        const audioData = event.data.audioData;
        for (let i = 0; i < audioData.length; i++) {
          this.buffer.push(audioData[i]);
        }
      }
    };
  }

  process(inputs, outputs) {
    const output = outputs[0];
    
    if (this.buffer.length > 0) {
      for (let channel = 0; channel < output.length; ++channel) {
        const outputChannel = output[channel];
        for (let i = 0; i < outputChannel.length; ++i) {
          if (this.buffer.length > 0) {
            outputChannel[i] = this.buffer.shift();
          } else {
            outputChannel[i] = 0;
          }
        }
      }
    } else {
      for (let channel = 0; channel < output.length; ++channel) {
        const outputChannel = output[channel];
        for (let i = 0; i < outputChannel.length; ++i) {
          outputChannel[i] = 0;
        }
      }
    }

    return true;
  }
}

registerProcessor('audio-concat-processor', AudioConcatProcessor); 