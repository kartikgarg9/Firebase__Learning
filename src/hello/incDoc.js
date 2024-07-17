const db = require("../db");

const incrementId = async (docId) => {
  // Reference to the document in Firestore
  const docRef = db.collection("users/hello/new-users").doc(docId);

  try {
    // Execute a transaction to safely update the document
    await db.runTransaction(async (transaction) => {
      // Retrieve the document snapshot within the transaction
      const doc = await transaction.get(docRef);

      // Check if the document exists
      if (!doc.exists) {
        throw new Error("Document does not exist!");
      }

      // Calculate the new value for 'id' (increment by 1)
      const newId = (doc.data().id || 0) + 1;

      // Update the document with the new 'id' value
      transaction.update(docRef, { id: newId });
    });

    // Log success message if the transaction is successful
    console.log("Transaction successfully committed!");
  } catch (error) {
    // Handle errors that occur during the transaction
    console.error("Transaction failed: ", error);
  }
};

module.exports = incrementId;
