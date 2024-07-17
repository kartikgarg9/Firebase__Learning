const db = require("../db");

const deleteDocument = async () => {
  try {
    // Delete document with specified ID from 'users' collection
    await db.collection("users").doc("BSQpkaJ3rKwsAefN8VMM").delete();

    // Log success message if deletion is successful
    console.log("Document successfully deleted");
  } catch (error) {
    // Log error if document deletion fails
    console.error("Error deleting document:", error);
  }
};

module.exports = deleteDocument;
