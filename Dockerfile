# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy built application from builder stage
COPY --from=builder /app/build /app/build
COPY --from=builder /app/.svelte-kit /app/.svelte-kit
COPY --from=builder /app/static /app/static

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["node", "build"] 