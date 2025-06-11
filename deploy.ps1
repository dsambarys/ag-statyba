# Clean up old build artifacts
Write-Host "Cleaning up old build artifacts..."
Remove-Item -Path "build" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".svelte-kit" -Recurse -Force -ErrorAction SilentlyContinue

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Build the application
Write-Host "Building the application..."
npm run build

# Create SSL directory if it doesn't exist
if (-not (Test-Path "ssl")) {
    New-Item -ItemType Directory -Path "ssl"
}

# Check if SSL certificates exist
if (-not (Test-Path "ssl/cert.pem") -or -not (Test-Path "ssl/key.pem")) {
    Write-Host "Generating self-signed SSL certificates..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 `
        -keyout ssl/key.pem -out ssl/cert.pem `
        -subj "/C=LT/ST=Vilnius/L=Vilnius/O=YourCompany/CN=agstatyba.lt"
}

# Set environment variables for Docker Compose
$env:VITE_STRIPE_PUBLIC_KEY = "pk_test_51RLhtJRvw6idZTXHmlZGtTIdOwBTN3OFHjCRhX0L4v0ph7Y5g4uxOnPDUiZQ1k7z54fxwoVKJlh74TUKzV25Mc9Q00UH1MYvXz"
$env:VITE_STRIPE_SECRET_KEY = "sk_test_51RLhtJRvw6idZTXHmlZGtTIdOwBTN3OFHjCRhX0L4v0ph7Y5g4uxOnPDUiZQ1k7z54fxwoVKJlh74TUKzV25Mc9Q00UH1MYvXz"

# Build and start Docker containers
Write-Host "Starting Docker containers..."
docker-compose down
docker-compose up -d --build

Write-Host "Deployment complete! The application is running at https://agstatyba.lt" 