FROM node

RUN mkdir -p /usr/src/partidosdocker

WORKDIR /usr/src/partidosdocker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
