FROM node:20.9-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use a smaller image for runtime
FROM node:20.9-alpine
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY package*.json ./
RUN npm install serve -g
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "serve"]
