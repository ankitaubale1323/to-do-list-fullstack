# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose frontend port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev"]
