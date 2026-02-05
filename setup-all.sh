#!/bin/bash

# Setup script for all skills in the project
set -e

SKILLS_DIR="./.agent/skills"

echo "🚀 Starting setup for all skills..."

# 1. Playwright Browser Automation
echo "📦 Setting up Playwright Browser Automation..."
if [ -d "$SKILLS_DIR/playwright-browser-automation" ]; then
    cd "$SKILLS_DIR/playwright-browser-automation" && npm run setup
    cd - > /dev/null
fi

# 2. Browser-use (requires Python/uv)
echo "📦 Setting up browser-use..."
if [ -d "$SKILLS_DIR/browser-use" ]; then
    if command -v uv &> /dev/null; then
        echo "Using uv to install browser-use[cli]..."
        uv pip install "browser-use[cli]"
        browser-use install
    else
        echo "uv not found, skipping browser-use automated installation. Please follow instructions in SKILL.md"
    fi
fi

# 3. Agent-browser (Vercel Labs)
echo "📦 Setting up agent-browser..."
if [ -d "$SKILLS_DIR/agent-browser" ]; then
    echo "Installing agent-browser dependencies..."
    npx agent-browser install
fi

echo "✅ All skills setup complete!"
