FROM node:20.9-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Use a smaller image for runtime
FROM node:20.9-alpine AS runtime
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
WORKDIR /app
COPY --from=builder /app/dist /app/dist
USER nonroot
COPY package*.json ./
RUN npm install serve -g
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "serve"]
