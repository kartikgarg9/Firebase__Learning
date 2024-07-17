/////////////////////////////////////////////////Delete a batch of query////////////////////////////////////////////////////

const db = require("../db");

/**
 * Function to delete a batch of documents
 * @param {string} collectionPath - Path to the Firestore collection
 * @param {number} batchSize - Number of documents to delete in one batch
 */

const deleteBatch = async (collectionPath, batchSize) => {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);
  try {
    const snapshot = await query.get();

    if (snapshot.empty) {
      console.log("No documents to delete.");
      return;
    }

    let batch = db.batch();

    for (const doc of snapshot.docs) {
      if (batchSize >= 499) {
        await batch.commit();
        batch = db.batch();
        batchSize = 0;
      }
      batchSize = batchSize + 1;
      batch.delete(doc.ref);
    }

    await batch.commit();
    console.log(`Successfully deleted ${snapshot.size} documents.`);

    // Recursively delete the next batch of documents
    process.nextTick(() => {
      deleteBatch(collectionPath, batchSize);
    });
  } catch (error) {
    console.error("Error deleting batch: ", error);
  }
};

module.exports = deleteBatch;
