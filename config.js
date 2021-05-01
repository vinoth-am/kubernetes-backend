const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "",
  keyFilename: "",
});

module.exports = firestore;
