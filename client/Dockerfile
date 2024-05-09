FROM node:20.13.0

USER node

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY ./src ./public ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]