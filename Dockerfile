# Step 1: Use the official Node.js image as the base image
FROM node:22 AS base

# Set working directory in the container
WORKDIR /app

# Step 2: Copy the package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Step 3: Copy the rest of the application files
COPY . .

# Step 4: Build the Next.js application
RUN npm run build

# Step 5: Expose the port that Next.js will run on
EXPOSE 3000

# Step 6: Start the Next.js application in production mode
CMD ["npm", "start"]
