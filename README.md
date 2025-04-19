# Hydrogen Water Landing Page

A modern, responsive landing page for Hydrogen Water built with Tailwind CSS.

## Features

- 🎨 Clean, modern design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Fast loading with CDN-based Tailwind
- 📝 Email signup forms
- 🎯 Optimized for conversions
- 🔍 SEO-friendly structure

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the page
3. Customize the content and styling as needed

## Customization

### Colors
The color scheme can be modified in the Tailwind configuration within the `index.html` file. Look for the `tailwind.config` section:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    // ... other shades
                }
            }
        }
    }
}
```

### Forms
The page includes two forms:
1. Hero section signup
2. Newsletter subscription

To make these functional, you'll need to:
1. Set up a form handling service (e.g., Formspree)
2. Add the form action URL to the form elements
3. Configure any additional form settings

### Images
Replace the placeholder images with your own:
- Logo
- Trusted by section logos
- About section image
- Video thumbnail
- Testimonial avatars

## Deployment

### Netlify Deployment
1. Create a new site on Netlify
2. Connect your repository
3. Deploy with default settings

### Manual Deployment
1. Build your site locally
2. Upload the files to your hosting provider
3. Ensure all assets are properly linked

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects.

## Credits

- Font: Inter (Google Fonts)
- Icons: Heroicons
- Tailwind CSS 