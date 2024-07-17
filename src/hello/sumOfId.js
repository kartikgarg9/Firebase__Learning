const db = require("../db");

////////////////////////////////////////////////////SUM OF ID///////////////////////////////////////////////////////////////////////

const getSumOfIds = async (db, collectionPath) => {
  try {
    const collectionRef = db.collection(collectionPath);
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
      console.log("No documents found in the collection.");
      return;
    }

    let sum = 0;
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.id) {
        sum += data.id;
      }
    });

    console.log(`Sum of 'id' field in '${collectionPath}':`, sum);
  } catch (error) {
    console.error("Error calculating sum of ids:", error);
  }
};

module.exports = getSumOfIds;
