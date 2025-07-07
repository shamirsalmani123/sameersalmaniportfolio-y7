#!/bin/bash

echo "🔍 Debugging Next.js Build Process"
echo "=================================="

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build with debug info
echo "🏗️ Building with debug information..."
DEBUG=* npm run build 2>&1 | tee build.log

# Check if out directory was created
echo "📁 Checking output directory..."
if [ -d "out" ]; then
    echo "✅ Output directory created successfully"
    echo "📋 Directory structure:"
    find out -type f -name "*.html" | head -20
    
    echo "🎯 Checking for project pages..."
    find out -path "*/projects/*" -name "*.html"
else
    echo "❌ Output directory not found!"
fi

echo "🔍 Build process completed. Check build.log for details."
