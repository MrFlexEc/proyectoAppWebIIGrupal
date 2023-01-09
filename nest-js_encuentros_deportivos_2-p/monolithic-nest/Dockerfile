FROM node

RUN mkdir -p /usr/src/appmonolitico

WORKDIR /usr/src/appmonolitico

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "npm", "run", "start:dev" ]