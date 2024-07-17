"use strict";

var db = require("../db.js");
var createInBulk = require("./hello/createInbulk.js");
var userData = require("../mockdata/users.json");
var deleteBatch = require("./hello/delBatch.js");
var deleteDocument = require("./hello/deleteDoc.js");
var findUsersWithIdGreaterThan = require("./hello/findUser.js");
var incrementId = require("./hello/incDoc.js");
var xyz = require("./hello/createDoc.js");
var updateDocument = require("./hello/updateDoc.js");
var object = require("./hello/object.js");
var getSumOfIds = require("./hello/sumOfId.js");
getSumOfIds;
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