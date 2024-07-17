const db = require("../db");

const getSumOfIds = async (db, collectionPath) => {
  try {
    // Get a reference to the Firestore collection
    const collectionRef = db.collection(collectionPath);

    // Fetch the collection snapshot
    const snapshot = await collectionRef.get();

    // Check if the collection is empty
    if (snapshot.empty) {
      console.log("No documents found in the collection.");
      return;
    }

    // Initialize a variable to store the sum of 'id' field
    let sum = 0;

    // Iterate through each document in the snapshot
    snapshot.forEach((doc) => {
      // Retrieve the document data
      const data = doc.data();

      // Check if the document has 'id' field and add it to the sum
      if (data.id) {
        sum += data.id;
      }
    });

    // Log the sum of 'id' field in the collection
    console.log(`Sum of 'id' field in '${collectionPath}':`, sum);
  } catch (error) {
    // Handle errors if any
    console.error("Error calculating sum of ids:", error);
  }
};

module.exports = getSumOfIds;
