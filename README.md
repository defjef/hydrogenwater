# Hydrogen Water Landing Page

A high-converting, visually clean landing page for Hydrogen Water, featuring an ElevenLabs voice interaction widget.

## 🚀 Features

- Modern, responsive design with Tailwind CSS
- ElevenLabs voice interaction widget
- Mobile-friendly layout
- SEO-optimized structure

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- ElevenLabs Convai Widget
- Netlify for hosting

## 📋 Project Structure

```
hydrogen-water/
├── public/                  # Netlify publish directory
│   ├── index.html           # Main landing page
│   ├── js/                  # JavaScript files
│   │   └── elevenlabs-init.js # Custom ElevenLabs initialization
│   └── _headers             # Netlify headers configuration
├── audio-worklet/           # GitHub Pages repository for audio worklet
│   ├── audio-concat-processor.js # Audio worklet processor
│   ├── _headers             # GitHub Pages headers
│   └── README.md            # Documentation for audio worklet
├── netlify.toml             # Netlify configuration
└── README.md                # This file
```

## 🔧 Setup Instructions

### 1. Deploy the Main Landing Page to Netlify

1. Push this repository to GitHub
2. Connect the repository to Netlify
3. Set the publish directory to `public`
4. Deploy the site

### 2. Deploy the Audio Worklet to GitHub Pages

1. Create a new GitHub repository (e.g., `hydrogen-water-audio-worklet`)
2. Push the contents of the `audio-worklet` directory to the repository
3. Enable GitHub Pages in the repository settings
4. Update the URL in `public/js/elevenlabs-init.js` to point to your GitHub Pages URL

### 3. Update the Audio Worklet URL

Edit `public/js/elevenlabs-init.js` and replace:
```javascript
await audioContext.audioWorklet.addModule('https://yourusername.github.io/audio-worklet/audio-concat-processor.js');
```
with your actual GitHub Pages URL.

## 📝 License

MIT 