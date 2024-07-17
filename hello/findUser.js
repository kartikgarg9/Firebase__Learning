////////////////////////////////////////////////////FIND USER WITH ID///////////////////////////////////////////////////////////////

const db = require("../db");
const findUsersWithIdGreaterThan = async (id) => {
  try {
    const querySnapshot = await db
      .collection("users/hello/new-users")
      .where("id", ">", id)
      .get();

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error querying users: ", error);
  }
};

module.exports = findUsersWithIdGreaterThan;
