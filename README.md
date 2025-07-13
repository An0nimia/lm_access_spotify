# Spotify Authorization Code Display

A simple web application that reads an authorization code from URL parameters and displays it with a copy-to-clipboard functionality. Perfect for OAuth flows where users need to easily copy authorization codes.

## 🚀 Live Demo

Visit: `https://an0nimia.github.io/lm_access_spotify/?code=your_code_here`

## ✨ Features

- **URL Parameter Reading**: Automatically extracts the `code` parameter from the URL
- **One-Click Copy**: Copy the authorization code to clipboard with visual feedback
- **Modern UI**: Clean, responsive design with Spotify-inspired styling
- **Error Handling**: Shows appropriate message when no code is found
- **Mobile Friendly**: Responsive design that works on all devices
- **Browser Compatibility**: Works with modern browsers and includes fallbacks

## 🎯 Usage

### Basic Usage
Simply append the code as a URL parameter:
```
https://an0nimia.github.io/lm_access_spotify/?code=AQC1234567890abcdef
```

### OAuth Integration
This tool is perfect for OAuth flows where you need users to copy authorization codes:

1. Set your OAuth redirect URI to: `https://an0nimia.github.io/lm_access_spotify/`
2. After authorization, users will be redirected with the code parameter
3. The page will automatically display the code with a copy button

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/An0nimia/lm_access_spotify.git
cd lm_access_spotify
```

2. Open `index.html` in your browser or serve it with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or simply open the file directly
open index.html
```

3. Test with a sample code:
```
http://localhost:8000/?code=sample_authorization_code_123
```

## 📁 Project Structure

```
├── index.html          # Main HTML page
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .github/
    └── workflows/
        └── jekyll-gh-pages.yml  # GitHub Pages deployment
```

## 🚀 Deployment

This project automatically deploys to GitHub Pages when pushed to the main branch. The workflow is configured in `.github/workflows/jekyll-gh-pages.yml`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).