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
git commit -m "Update from Firebase Studio"

echo "Pushing code to GitHub..."
git push -u origin main
