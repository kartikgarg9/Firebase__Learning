//////////////////////////////////////////////// Function to increment the 'id' field by 1//////////////////////////////////////////
const db = require("../db");
const incrementId = async (docId) => {
  const docRef = db.collection("users/hello/new-users").doc(docId);

  try {
    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(docRef);

      if (!doc.exists) {
        throw new Error("Document does not exist!");
      }

      const newId = (doc.data().id || 0) + 1;
      transaction.update(docRef, { id: newId });
    });

    console.log("Transaction successfully committed!");
  } catch (error) {
    console.error("Transaction failed: ", error);
  }
};

module.exports = incrementId;
