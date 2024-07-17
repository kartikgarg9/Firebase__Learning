const db = require("../db");
const object = require("./object");

const updateDocument = async () => {
  console.log(object.id);
  const userRef = db.collection("users").doc(object.id.toString());

  try {
    await userRef.update({ salary: 500000 });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
module.exports = updateDocument;
