# Running Your Personal Website

## Option 1: Open Directly in a Browser (Simplest)

The easiest way to view your website locally:

1. Open your file explorer/finder
2. Navigate to the website folder (`/Users/christopherodoom/Desktop/Myappsfiles/Personal_website`)
3. Double-click on the `index.html` file
4. The website will open in your default web browser

## Option 2: Use a Local Server (Better for Development)

For a more realistic development environment, you can use a simple HTTP server:

### Using Python (if installed):

```bash
# If you have Python 3 installed
cd /Users/christopherodoom/Desktop/Myappsfiles/Personal_website
python3 -m http.server

# OR if you have Python 2 installed
cd /Users/christopherodoom/Desktop/Myappsfiles/Personal_website
python -m SimpleHTTPServer
```

Then open your browser and go to: http://localhost:8000

### Using Node.js (if installed):

```bash
# Install the http-server package (one-time setup)
npm install -g http-server

# Run the server
cd /Users/christopherodoom/Desktop/Myappsfiles/Personal_website
http-server
```

Then open your browser and go to: http://localhost:8080

## Customizing Before Running

Before running your website, you may want to:

1. Update the personal information in `index.html`
   - Replace "Your Name" with your actual name
   - Update the title/position
   - Fill in your actual biography, education, projects, and publications
   - Update contact information

2. Add your profile picture
   - Add an image file named `profile.jpg` to the website folder
   - Or change the image source in the HTML to match your image file name

3. Update your social media links
   - Replace the placeholder URLs with your actual social media profile URLs

## Notes on Local Development

- Images and styles should load correctly when viewing locally
- The Font Awesome icons are loaded from a CDN and require internet connection
- Any changes you make to the HTML, CSS or JavaScript files will be reflected when you refresh the browser 