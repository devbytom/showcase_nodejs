FROM node:11.15
USER root
WORKDIR /app

RUN groupadd app && \ 
  useradd -g app app && \
  chown -R app:app /home && \
  chown -R app:app . && \
  chmod -R 774 .

USER app

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run test

CMD ["npm", "start"]

