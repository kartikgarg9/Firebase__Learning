////////////////////////////////CREATING DOCUMENT IN BATCH OR BULK//////////////////////////////////////////////

const db = require("../db");
const createInBulk = (datas) => {
  const collectionPath = "users/hello/new-users";
  const batch = db.batch();

  for (const documentData of datas) {
    const collectionRef = db.collection(collectionPath).doc();
    batch.create(collectionRef, documentData);
  }

  batch.commit();
};

module.exports = createInBulk;
