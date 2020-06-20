module.exports = {
  servers: {
    local: {
      host: "127.0.0.1",
      username: "root",
    },
  },

  app: {
    name: "ame-forum",
    path: "../",

    servers: {
      local: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: "http://127.0.0.1",
      MONGO_URL: "mongodb://mongodb/meteor",
      MONGO_OPLOG_URL: "mongodb://mongodb/local",
    },

    docker: {
      image: "abernix/meteord:node-8.4.0-base",
    },

    enableUploadProgressBar: true,
  },

  mongo: {
    version: "3.4.1",
    servers: {
      local: {},
    },
  },
};
