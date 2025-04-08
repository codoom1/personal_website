# Setting Up GitHub Pages for Your Personal Website

Your website has been successfully pushed to your GitHub repository. Now, let's set it up to be hosted with GitHub Pages:

## Steps to Enable GitHub Pages

1. **Go to your GitHub repository**
   - Visit: `https://github.com/codoom1/personal_website`

2. **Navigate to Settings**
   - Click on the "Settings" tab at the top of your repository page

3. **Go to Pages settings**
   - In the left sidebar, click on "Pages"

4. **Configure the source**
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select "main" and "/" (root)
   - Click "Save"

5. **Wait for deployment**
   - GitHub will start building your site
   - This usually takes a minute or two

6. **Access your website**
   - Once deployed, your site will be available at:
   - `https://codoom1.github.io/personal_website/`

## Setting Up a Custom Domain (Optional)

If you'd like to use a custom domain instead of the github.io address:

1. **Purchase a domain** from a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)

2. **In GitHub repository settings**:
   - Go to Pages settings
   - Enter your domain in the "Custom domain" field
   - Click "Save"
   - Check "Enforce HTTPS" after DNS verification is complete

3. **At your domain registrar, set up DNS records**:
   - Add an `A` record pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a `CNAME` record:
     - Name: www
     - Value: codoom1.github.io

4. **Wait for DNS propagation**
   - This can take 24-48 hours
   - Your custom domain will then be connected to your GitHub Pages site

## Troubleshooting

- **404 errors**: Make sure your repository is public
- **Missing styles/images**: Verify all paths in your HTML are correct
- **Custom domain not working**: DNS records may need time to propagate

## Advantages of GitHub Pages

- **Free hosting**: No monthly fees
- **Automatic updates**: Changes are deployed when you push to GitHub
- **Reliable**: Built on GitHub's robust infrastructure
- **HTTPS**: Secure connection provided for free 