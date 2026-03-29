#!/bin/bash
echo "Initializing Git and connecting to repository..."
if [ ! -d .git ]; then
  git init
fi

# Set remote origin
git remote remove origin 2>/dev/null
git remote add origin https://github.com/nevermature01-lgtm/jayotri

# Ensure we are on the main branch
git branch -M main

# Stage and commit
git add .
# Check if there are changes to commit to avoid errors on empty commits
if git diff-index --quiet HEAD -- 2>/dev/null; then
    echo "No new changes to commit."
else
    git commit -m "Update from Firebase Studio"
fi

echo "Pushing code to GitHub..."
# Using --force to ensure the local project over-writes the remote (required for new repo initialization)
git push -u origin main --force
