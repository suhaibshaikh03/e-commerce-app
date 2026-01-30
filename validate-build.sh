#!/bin/bash
# Post-build validation script for e-commerce app

echo "Validating build artifacts..."

# Check if .next directory exists
if [ -d ".next" ]; then
    echo "✓ .next directory exists"
else
    echo "✗ .next directory missing"
    exit 1
fi

# Check if important build files exist
if [ -f ".next/BUILD_ID" ]; then
    echo "✓ BUILD_ID file exists"
else
    echo "✗ BUILD_ID file missing"
    exit 1
fi

# Check if static files exist
if [ -d ".next/static" ]; then
    echo "✓ Static assets directory exists"
else
    echo "✗ Static assets directory missing"
    exit 1
fi

# Check if the app directory exists in build
if [ -d ".next/server/app" ]; then
    echo "✓ App routes exist in build"
else
    echo "⚠ App routes not found (may be OK depending on app structure)"
fi

echo "Build validation completed successfully!"