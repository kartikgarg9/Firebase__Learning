# Firebase Learning

A repository for learning and experimenting with Firebase, including Firestore, Firebase Functions, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
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
## Utility Functions in `hello` Folder

### [`index.js`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/hello/index.js)

- [`getUser(id)`](#getuser): Retrieves user data by ID.
- [`updateUser(id, data)`](#updateuser): Updates user data.
- [`deleteUser(id)`](#deleteuser): Deletes user data.

### [`other-file.js`](https://github.com/kartikgarg9/Firebase__Learning/blob/main/hello/other-file.js)

- [`calculateAge(birthDate)`](#calculateage): Calculates the age based on the birth date.
- [`formatName(firstName, lastName)`](#formatname): Formats a full name.

### `index.js` Utility Functions

#### `getUser(id)`

Function to retrieve user data by ID.

```javascript
function getUser(id) {
  // Implementation to fetch user data from Firestore
}

  ```

