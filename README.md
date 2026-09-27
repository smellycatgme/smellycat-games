# Smelly Cat Games - Landing Page

Welcome to the official landing page for **Smelly Cat Games**! This is a mobile-friendly, modern landing page designed to introduce players to our gaming platform, community, and token ecosystem.

## 🎮 Features

- **Responsive Design**: Fully mobile-friendly layout that works on all devices
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Showcase**: Highlights what makes Smelly Cat Games special
- **Community Hub**: Connect with players and join our community
- **Token Section**: Information about our SCT token and rewards system
- **Call to Action**: Email signup form for new players
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Fast-loading, optimized assets

## 📁 File Structure

```
.
├── index.html              # Main landing page
├── css/
│   └── styles.css         # All styling and responsive design
├── js/
│   └── script.js          # Interactive functionality
├── netlify.toml           # Netlify deployment configuration
├── package.json           # Project metadata
├── README.md              # This file
└── Screenshot_20260927_142949_Google(2).jpg  # Logo image
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/smellycatgme/smellycat-games.git
cd smellycat-games
```

2. Serve locally using Python:
```bash
python -m http.server 8000
```

Or using Node.js with http-server:
```bash
npx http-server
```

3. Open your browser and visit:
```
http://localhost:8000
```

### Development with npm

```bash
npm run serve
```

## 🌐 Netlify Deployment

This project is configured for free deployment on Netlify.

### Deploy to Netlify

**Option 1: Automatic Deployment (Recommended)**

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com)
3. Click "New site from Git"
4. Select GitHub repository: `smellycatgme/smellycat-games`
5. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)
6. Click "Deploy site"

**Option 2: Manual Deployment**

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

3. For production deployment:
```bash
netlify deploy --prod
```

**Option 3: Drag & Drop**

1. Go to [Netlify](https://www.netlify.com)
2. Create account if needed
3. Drag and drop the project folder

## 🎨 Customization

### Change Colors

Edit `css/styles.css` and modify the CSS variables at the top:

```css
:root {
  --primary-color: #FF6B9D;      /* Main pink color */
  --secondary-color: #FFA500;    /* Orange accent */
  --accent-color: #6C63FF;       /* Purple accent */
  /* ... other colors ... */
}
```

### Update Logo

Replace `Screenshot_20260927_142949_Google(2).jpg` with your own logo image.

### Modify Content

Edit `index.html` to update:
- Hero section text
- Feature descriptions
- Community links
- Token information
- Call-to-action buttons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Configuration Files

### netlify.toml

Contains Netlify-specific settings:
- Build configuration
- Redirects for SPA support
- Cache headers optimization
- Environment variables

### package.json

Project metadata and scripts for local development.

## 🔧 Features Details

### Responsive Design

- Desktop: Full grid layouts
- Tablet (768px): Optimized spacing
- Mobile (480px): Single column layouts

### Interactive Elements

- Smooth scroll navigation
- Form validation and submission
- Hover animations
- Scroll-triggered fade-in animations

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## 📊 Form Integration

The signup form (`#signup-form`) currently:
- Validates input fields
- Shows success/error messages
- Stores data locally (ready for backend integration)

**To connect to a backend:**

1. Update the API endpoint in `js/script.js`
2. Replace the fetch/API call logic
3. Configure CORS if needed on your backend

## 🔐 Security Notes

- No sensitive data is hardcoded
- Form submissions are validated client-side (add server-side validation in production)
- Use environment variables for API keys
- Enable HTTPS on Netlify (automatic)

## 🎯 SEO Optimization

- Meta tags for social media sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast page load times
- Structured data ready

## 📝 License

MIT License - Feel free to use and modify as needed.

## 👥 Support

For issues or questions:
- GitHub Issues: [Create an issue](https://github.com/smellycatgme/smellycat-games/issues)
- Email: Contact through the website form

## 🎮 What's Next?

- [ ] Connect form to backend API
- [ ] Add Discord/social media links
- [ ] Implement newsletter signup
- [ ] Add blog section
- [ ] Create admin dashboard
- [ ] Implement analytics
- [ ] Add testimonials section
- [ ] Set up email notifications

## 🚀 Deployment Status

- **Netlify**: Ready to deploy
- **Build Command**: None (static site)
- **Publish Directory**: `.` (root)
- **Free Tier**: ✅ Compatible

---

**Made with ❤️ by Smelly Cat Games Team**

Last Updated: September 27, 2026
