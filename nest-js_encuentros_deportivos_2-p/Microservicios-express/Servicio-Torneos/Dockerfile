FROM node

RUN mkdir -p /usr/src/torneosdocker

WORKDIR /usr/src/torneosdocker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
