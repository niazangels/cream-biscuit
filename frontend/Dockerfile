FROM node:22-alpine

WORKDIR /app

COPY app/package*.json /app/

RUN npm install

ENTRYPOINT ["npm", "run", "dev", "--", "--host", "0.0.0.0"]