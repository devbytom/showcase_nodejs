FROM node:11.15
USER root
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . ./
RUN groupadd app && \ 
  useradd -g app app && \
  chown -R app:app /home && \
  chown -R app:app . && \
  chmod -R 666 .

USER app
RUN npm run test
CMD ["npm", "start"]

