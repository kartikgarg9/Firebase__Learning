///////////////////////////////////////////CREATE A DOCUMENT//////////////////////////////////////////////////////////////
const { object } = require("firebase-functions/v1/storage");
const db = require("../db");

const xyz = async () => {
  db.collection("gfd").doc(object.id).create(object); //Create a Document
  db.collection("gfd").doc(object.id).set(object); //Create and Update a Document
  db.collection("gfd").doc().create(object); // Auto generate Id
  const res = await db.collection("users").add(object);
  console.log("Added document with ID: ", res.id);
};

module.exports = xyz;
