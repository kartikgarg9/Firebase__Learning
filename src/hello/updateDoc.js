const db = require("../db");
const object = require("./object");

const updateDocument = async () => {
  console.log(object.id); // Log the id from the imported object
  const userRef = db.collection("users").doc(object.id.toString()); // Reference to the Firestore document

  try {
    // Update the document with a new field 'salary' set to 500000
    await userRef.update({ salary: 500000 });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

module.exports = updateDocument;
