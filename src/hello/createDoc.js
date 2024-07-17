///////////////////////////////////////////CREATE A DOCUMENT//////////////////////////////////////////////////////////////
const db = require("../db");
const xyz = async () => {
  db.collection("gfd").doc(object.id).create(object);
  db.collection("gfd").doc(object.id).set(object);
  db.collection("gfd").doc().create(); // Auto generate Id
  db.collection;
  const res = await db.collection("users").add(object);
  console.log("Added document with ID: ", res.id);
};

module.exports = xyz;
