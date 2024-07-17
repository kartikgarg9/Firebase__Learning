/////////////////////////////////////////////////////////DELETE A DOCUMENT////////////////////////////////////////////////////////////
const db = require("../db");

const deleteDocument = async () => {
  try {
    await db.collection("users").doc("BSQpkaJ3rKwsAefN8VMM").delete();
    console.log("Document successfully deleted");
  } catch (error) {
    console.eroor("User Not Found: ", error);
  }
};

module.exports = deleteDocument;
