FROM node:20-alpine

# Install OS-level dependencies (Alpine equivalent)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    curl \
    git \
    vips-dev

WORKDIR /app

# Copy dependency files first
COPY package*.json tsconfig.json ./

# Install npm dependencies
RUN npm install

# Copy source
COPY . .

# Build inside container
RUN npm run build

CMD ["npm", "start"]
