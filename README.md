# Personal Portfolio Website

A clean, responsive personal portfolio website to showcase your academic background, projects, publications, and contact information.

## Running the Website

### Option 1: Easy Launch (Recommended)

Two launcher scripts are included for easy startup:

- **On macOS**: Double-click the `run_website.command` file in Finder
- **On any system**: Run `./app.sh` in your terminal

These scripts will automatically start a local web server, and you can view your website at http://localhost:8000

### Option 2: Manual Launch

You can also run the website manually:

1. Open your file explorer/finder
2. Navigate to the website folder
3. Double-click on the `index.html` file to open it directly in a browser

OR

Use Python to start a local server:
```bash
python3 -m http.server 8000
```

## Features

- Responsive design that works on all devices
- Clean and modern UI
- Sections for:
  - About Me
  - Education
  - Projects
  - Publications
  - Contact

## How to Customize

### 1. Personal Information

Edit the `index.html` file to replace placeholder content with your information:

- Change "Your Name" to your actual name
- Update "Your Title/Position" with your current role
- Replace the placeholder text in the About section with your bio
- Add your actual education history, projects, and publications
- Update contact information with your email and location

### 2. Profile Picture

1. Add your profile picture to the project directory
2. Update the `<img src="https://via.placeholder.com/300x300.png?text=Your+Photo" alt="Your Name">` tag in the About section with your image file name:
   ```html
   <img src="your-photo-filename.jpg" alt="Your Name">
   ```

### 3. Social Media Links

Update the social media links in the About section with your actual profiles:

```html
<div class="social-links">
    <a href="https://github.com/YOUR-USERNAME" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/YOUR-USERNAME" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
    <!-- Add more social media links as needed -->
</div>
```

### 4. Font Awesome

The template uses Font Awesome for icons. You need to replace the placeholder kit URL:

```html
<script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
```

Get your own Font Awesome kit URL by:
1. Creating an account at [Font Awesome](https://fontawesome.com/)
2. Generating a kit
3. Replacing the placeholder URL with your kit URL

### 5. Customizing Colors

The color scheme can be customized by editing the CSS variables in the `styles.css` file:

```css
:root {
    --primary: #0070f3;  /* Change this to your preferred primary color */
    --dark: #333;
    --light: #f5f5f5;
    --gray: #666;
    --border: #ddd;
    --container-width: 1200px;
}
```

## Hosting Your Website

There are several free options for hosting your personal website:

1. **GitHub Pages** - Free hosting directly from your GitHub repository
2. **Netlify** - Free tier with easy deployment from Git
3. **Vercel** - Free for personal projects with simple deployment

For GitHub Pages setup instructions, see the GITHUB_SETUP.md file included in this repository.

## License

Feel free to use this template for your personal website.

## Credits

Icons by [Font Awesome](https://fontawesome.com/) 