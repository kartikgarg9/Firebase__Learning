const db = require("../db.js");
const createInBulk = require("./hello/createInbulk.js");
const userData = require("../mockdata/users.json");
const deleteBatch = require("./hello/delBatch.js");
const deleteDocument = require("./hello/deleteDoc.js");
const findUsersWithIdGreaterThan = require("./hello/findUser.js");
const incrementId = require("./hello/incDoc.js");
const xyz = require("./hello/createDoc.js");
const updateDocument = require("./hello/updateDoc.js");
const object = require("./hello/object.js");
const getSumOfIds = require("./hello/sumOfId.js");

// getSumOfIds(db, "users/hello/new-users");
// createInBulk(userData);

// xyz();

// updateDocument();

// incrementId(userData.id);

// updateDocument().then(() => {
//   console.info("Document sucessfully updated");
// });

// deleteBatch("users/hello/new-users", 30);

// findUsersWithIdGreaterThan(9);

// getCollectionCount("users/hello/new-users");

// getSumOfIds("users/hello/new-users");
// deleteDocument("users/hello/new-users");
