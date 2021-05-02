const firestore = require("./config");

const geNotesResolver = async () => {
  const response = await firestore.collection("notes").get();
  let result = [];
  if (response.docs) {
    result = response.docs.map((doc) => {
      return doc.data();
    });
  }
  return result;
};

const postNotesResolver = async (_, { title, description }) => {
  const requestData = {
    title,
    description,
  };
  const response = await firestore.collection("notes").add(requestData);
  if (response.id) {
    return {
      status: true,
      message: "Success",
    };
  } else {
    return {
      status: false,
      message: "Failed",
    };
  }
};

const resolvers = {
  Query: {
    getNotes: geNotesResolver,
  },
  Mutation: {
    postNotes: postNotesResolver,
  },
};

module.exports = resolvers;
