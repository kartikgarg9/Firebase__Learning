const db = require("../db");

/////////////////////////////////////////////COUNT OF DOCUMENTS IN FIREBASE/////////////////////////////////////////////////////////////

const getCollectionCount = async (collectionPath) => {
  try {
    const collectionRef = db.collection(collectionPath);
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
      console.log("The collection is empty.");
      return;
    }

    console.log(`Number of documents in '${collectionPath}':`, snapshot.size);
  } catch (error) {
    console.error("Error getting collection count:", error);
  }
};

module.exports = getCollectionCount;
