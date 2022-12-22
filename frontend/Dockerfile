FROM node:14

WORKDIR /app/frontend

COPY package.json ./

RUN npm i && \
    npm install husky && \
    npm audit fix

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]