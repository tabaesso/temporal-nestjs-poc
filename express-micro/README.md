# My Express App

This is a basic "Hello World" application built with Express and TypeScript.

## Project Structure

```
my-express-app
├── src
│   ├── app.ts               # Entry point of the application
│   ├── controllers          # Contains controllers for handling requests
│   │   └── index.ts         # Index controller for the root route
│   ├── routes               # Contains route definitions
│   │   └── index.ts         # Route setup for the application
│   └── types                # Custom TypeScript types
│       └── index.ts         # Type definitions for Request and Response
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Running the Application

To start the application, use the following command:

```
npm start
```

The application will be running on `http://localhost:3001`. You should see "Hello World!" when you access the root route.