FROM node:22.11.0-bullseye

USER root

RUN npm i -g npm@latest vercel@latest npm-check-updates
RUN apt-get update && apt-get -y install vim git

COPY ./src /home/node/practice
RUN chown -R node:node /home/node/practice

USER node
WORKDIR /home/node/practice