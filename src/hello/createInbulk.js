// Import the database connection module from "../db"
const db = require("../db");

// Function to create documents in bulk in a Firestore collection
const createInBulk = (datas) => {
  // Path to the Firestore collection where documents will be created
  const collectionPath = "users/hello/new-users";

  // Create a batch object for efficient batch operations
  const batch = db.batch();

  // Iterate over each document data provided in 'datas' array
  for (const documentData of datas) {
    // Generate a new document reference within the specified collection
    const collectionRef = db.collection(collectionPath).doc();

    // Add the document creation operation to the batch
    batch.create(collectionRef, documentData);
  }

  // Commit the batch operation to Firestore
  batch.commit();
};

// Export the function to make it accessible from other modules
module.exports = createInBulk;
