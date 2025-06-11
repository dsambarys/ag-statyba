#!/bin/bash

# Clean up old build artifacts
echo "Cleaning up old build artifacts..."
rm -rf build .svelte-kit

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Create SSL directory if it doesn't exist
mkdir -p ssl

# Check if SSL certificates exist
if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
    echo "Generating self-signed SSL certificates..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ssl/key.pem -out ssl/cert.pem \
        -subj "/C=LT/ST=Vilnius/L=Vilnius/O=YourCompany/CN=agstatyba.lt"
fi

# Build and start Docker containers
echo "Starting Docker containers..."
docker-compose down
docker-compose up -d --build

echo "Deployment complete! The application is running at https://agstatyba.lt" 