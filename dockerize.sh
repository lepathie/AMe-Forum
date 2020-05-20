#!/bin/bash
APP_NAME=ameforum
APP_DOMAIN=localhost
APP_PORT=3000
SETTINGS_PATH=.config/staging/settings.json
MONGO_URL=localhost
MONGO_PORT=3001
MONGO_DB=meteor

echo "=> Removing /tmp/${APP_NAME}"
rm -Rf /tmp/${APP_NAME}

echo "=> Executing Meteor Build…"
meteor build \
--allow-superuser \
--directory /tmp/${APP_NAME} \
--server=http://${APP_DOMAIN}:${APP_PORT}/

echo "=> Copying settings file"
cp ${SETTINGS_PATH} /tmp/${APP_NAME}/bundle/settings.json

echo "=> Moving to /tmp/${APP_NAME}/bundle"
cd /tmp/${APP_NAME}/bundle

echo "=> Creating package.json…"
cat > package.json <<- "EOF"
{
  "name": "app",
  "version": "1.0.0",
  "scripts": {
    "start": "METEOR_SETTINGS=$(cat settings.json) node main.js"
  }
}
EOF

echo "=> Creating Dockerfile…"
cat > Dockerfile <<EOF

# Pull base image.
FROM mhart/alpine-node:4

# Install build tools to compile native npm modules
RUN apk add — update build-base python

# Create app directory
RUN mkdir -p /usr/app
COPY . /usr/app
RUN cd /usr/app/programs/server && npm install — production
WORKDIR /usr/app
ENV PORT=3000
ENV MONGO_URL=mongodb://$MONGO_URL:$MONGO_PORT/$MONGO_DB
ENV ROOT_URL=http://$APP_DOMAIN:$APP_PORT/
CMD [ "npm", "start" ]
EXPOSE 3000
EOF

echo "=> Building docker image…"
docker stop ${APP_NAME}
docker rm -f ${APP_NAME}
docker rmi -f ${APP_NAME}
docker build -t ${APP_NAME} .

echo "=> Starting ${APP_NAME} container…"
docker run -d — name ${APP_NAME} -p ${APP_PORT}:3000 ${APP_NAME}

docker logs container_name