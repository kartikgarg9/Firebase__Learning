const db = require("../db");

const getCollectionCount = async (collectionPath) => {
  try {
    // Get a reference to the collection
    const collectionRef = db.collection(collectionPath);

    // Fetch the collection snapshot
    const snapshot = await collectionRef.get();

    // Check if the collection is empty
    if (snapshot.empty) {
      console.log("The collection is empty.");
      return;
    }

    // Output the number of documents in the collection
    console.log(`Number of documents in '${collectionPath}':`, snapshot.size);
  } catch (error) {
    // Handle errors if any
    console.error("Error getting collection count:", error);
  }
};

module.exports = getCollectionCount;
