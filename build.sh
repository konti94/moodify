#!/bin/bash

echo "🚀 Starting Build Process for Moodify..."

# Install dependencies for the project
echo "🛠 Installing project dependencies..."
npm install

# Install dependencies for backend
echo "🛠 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install dependencies for frontend
echo "🛠 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Build frontend
echo "⚙️ Building frontend..."
cd frontend
npm run build
cd ..

echo "✅ Build Process Complete!"
