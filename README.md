# Firebase Learning

A repository for learning and experimenting with Firebase, including Firestore, Firebase Functions, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)git 
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a practice repository for getting hands-on experience with Firebase. It includes examples and exercises for various Firebase services like Firestore, Firebase Authentication, Firebase Functions, and more.

## Features

- Firestore CRUD operations
- Firebase Authentication
- Firebase Functions
- Bulk data import to Firestore
- Example of Firestore transactions
- GitHub Actions for CI/CD

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Firebase project set up.
- You have a service account JSON file for Firebase Admin SDK.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kartikgarg9/Firebase_Learning.git
   cd Firebase_Learning
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up Firebase:
   - Place your `service-account.json` file in the root of the project.
   - Ensure your Firebase project is configured correctly.

## Usage

### Running the Project

1. To run Firebase functions locally:

   ```sh
   firebase emulators:start
   ```

2. To deploy to Firebase:
   ```sh
   firebase deploy
   ```

### Example Commands

- Adding a new user to Firestore:

  ```js
  const { initializeApp, cert } = require("firebase-admin/app");
  const { getFirestore } = require("firebase-admin/firestore");

  const serviceAccount = require("./service-account.json");

  initializeApp({
    credential: cert(serviceAccount),
  });

  const db = getFirestore();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  db.collection("users")
    .add(user)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  ```

