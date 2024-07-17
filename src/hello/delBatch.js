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

    // Iterate over each document in the snapshot
    for (const doc of snapshot.docs) {
      // Add document to the batch delete operation
      batch.delete(doc.ref);

      // Commit the batch if batchSize limit is reached (Firestore limit is 500 operations per batch)
      if (batch._opCount >= 499) {
        await batch.commit();
        batch = db.batch();
      }
    }

    // Commit the final batch
    if (batch._opCount > 0) {
      await batch.commit();
    }

    console.log(`Successfully deleted ${snapshot.size} documents.`);

    // Recursively call deleteBatch to delete the next batch of documents
    process.nextTick(() => {
      deleteBatch(collectionPath, batchSize);
    });
  } catch (error) {
    console.error("Error deleting batch: ", error);
  }
};

module.exports = deleteBatch;
