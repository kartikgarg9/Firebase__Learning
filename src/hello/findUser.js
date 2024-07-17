const db = require("../db");

const findUsersWithIdGreaterThan = async (id) => {
  try {
    // Construct a query to find users with IDs greater than 'id'
    const querySnapshot = await db
      .collection("users/hello/new-users") // Specify the collection path
      .where("id", ">", id) // Filter documents where 'id' field is greater than 'id'
      .get(); // Execute the query and get a snapshot of the result set

    // Check if there are no matching documents
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    // Iterate through the query snapshot
    querySnapshot.forEach((doc) => {
      // Log each document ID and data
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    // Handle errors that occur during the query
    console.error("Error querying users: ", error);
  }
};

module.exports = findUsersWithIdGreaterThan;
