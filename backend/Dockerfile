FROM node:16.17.0

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]