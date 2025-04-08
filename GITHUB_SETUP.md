# Setting Up Your Personal Website on GitHub

Follow these steps to host your personal website on GitHub Pages:

## Step 1: Create a Repository on GitHub

1. Go to GitHub.com and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Enter "personal_website" as the repository name
4. Add a description: "My personal website"
5. Make sure it's set as a Public repository
6. Do not add a README, .gitignore, or license file
7. Click "Create repository"

## Step 2: Push Your Local Code to GitHub

After creating the repository, GitHub will show you commands to connect your local repository. Open your terminal and run:

```bash
# Make sure you are in your website directory
cd /Users/christopherodoom/Desktop/Myappsfiles/Personal_website

# Set the remote repository URL (replace "yourusername" with your actual GitHub username)
git remote add origin https://github.com/codoom1/personal_website.git

# Push your code to GitHub
# You'll be prompted for your GitHub username and password
# If you have 2FA enabled, use a personal access token instead of your password
git push -u origin main
```

## Step 3: Create a Personal Access Token (if needed)

If you have two-factor authentication enabled or face issues with password authentication:

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Personal Website Push"
4. Select the "repo" scope
5. Click "Generate token"
6. Copy the token (you will only see it once)
7. Use this token as your password when pushing to GitHub

## Step 4: Enable GitHub Pages

Since your repository is named "personal_website" (not the username.github.io format), you'll need to manually enable GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" at the top of the repository page
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for GitHub Pages to build your site

## Step 5: Access Your Website

After successfully pushing your code and enabling GitHub Pages:

1. Your website will be available at: https://yourusername.github.io/personal_website/ (replace "yourusername" with your actual GitHub username)

## Customizing Your Website

Remember to update your personal information in the HTML file and add your profile picture before or after pushing to GitHub.

## Troubleshooting

If you encounter issues pushing to GitHub:
- Verify you're using the correct GitHub credentials
- Ensure your local repository has the correct remote URL
  ```bash
  git remote -v
  ```
- If needed, update the remote URL:
  ```bash
  git remote set-url origin https://github.com/yourusername/personal_website.git
  ``` 