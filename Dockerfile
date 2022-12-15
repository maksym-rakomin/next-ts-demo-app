FROM node:16.18.1-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
ENV ENV_NODE=production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
