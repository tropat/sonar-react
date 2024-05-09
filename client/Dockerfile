FROM node:20.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./public ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]