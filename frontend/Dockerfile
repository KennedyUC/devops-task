FROM node:14

WORKDIR /app/frontend

COPY package.json ./

RUN npm install && \
    npm audit fix

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start"]