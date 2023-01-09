FROM node

RUN mkdir -p /usr/src/equiposdocker

WORKDIR /usr/src/equiposdocker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]