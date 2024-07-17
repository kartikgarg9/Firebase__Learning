# Firebase Learning

A repository for learning and experimenting with Firebase, including Firestore, Firebase Functions, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

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

### [`collectionCount`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/collectionCount.js)

This file contains a utility function to count the number of documents in a Firestore collection.

### [`createDoc`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/createDoc.js)

This file contains a utility function to create documents in a Firestore collection.

### [`createInbulk`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/createInbulk.js)

This file contains a utility function to create a batch documents in a Firestore collection.

### [`delBatch`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/delBatch.js)

This file contains a utility function to delete a batch of documents in a Firestore collection.

### [`deleteDoc`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/deleteDoc.js)

This file contains a utility function to delete documents in a Firestore collection.

### [`findUser`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/findUser.js)

This file contains a utility function to find user in a Firestore collection.

### [`incDoc`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/incDoc.js)

This file contains a utility function to increase field value in a Firestore collection.

### [`object`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/object.js)

This file contains a utility function to create an object in a Firestore collection.

### [`sumOfId`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/sumOfId.js)

This file contains a utility function to sum of a field value in a Firestore collection.

### [`updateDoc`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/src/hello/updateDoc.js)

This file contains a utility function to update a document in a Firestore collection.
