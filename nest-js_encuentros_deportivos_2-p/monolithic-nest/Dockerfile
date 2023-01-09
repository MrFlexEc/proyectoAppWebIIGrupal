FROM node

RUN mkdir -p /usr/src/appmonolitico

WORKDIR /usr/src/appmonolitico

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 443

CMD [ "node","dist/main" ]