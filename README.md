# Express with TypeScript Template

This project sets up a basic **Express.js** application using **TypeScript** with support for automatic server restarts via **Nodemon** and **ts-node-dev**.This repository provides a basic setup for building a TypeScript-based Express.js application. It includes configuration for ESLint, Prettier, dotenv, and more.

## Features

- TypeScript with Express
- ESLint with TypeScript support
- Prettier for code formatting
- dotenv support for environment variables

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

#### 1. Clone the repository:

- Use GitHub's **"Use this template"** button or clone the repository using the following command:

```bash
git clone https://github.com/subho-1011/express-app-with-ts.git <your-project-name>
```

#### 2. Rename the `package.json`:

Open the `package.json` file in the cloned project directory and change the `name` field to your desired project name.

```bash
{
  "name": "my-awesome-express-app",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": { ... },
  ...
}
```

#### 3. Install dependencies:

Run the following command in the project directory to install the required dependencies:

```bash
cd <your-project-name>
npm install
```

#### 4. Start the development server:

Once dependencies are installed, you can run the project using:

```bash
npm run dev
```

## Project Structure

After renaming and setting up, the project will be structured as follows:

```bash
<your-project-name>
├── dist/                      # Compiled JavaScript files (after build)
├── node_modules/              # Installed dependencies
├── src/                       # Source files
│   └── index.ts               # Entry point for Express app
├── .eslintignore              # ESLint ignore file
├── .eslintrc.js               # ESLint configuration
├── .gitignore                 # Git ignore file
├── .prettierignore            # Prettier ignore file
├── .prettierrc                # Prettier configuration
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Development

Start the server
Use the following command to run the Express server in development mode:

```bash
npm run dev
```

### Build the project

To compile the TypeScript files into JavaScript:

```bash
npm run build
```

### Run the server in production mode

To run the project after building:

```bash
npm run serve
```

### Lint your code

To lint the project files with ESLint, use the following command:

```bash
npm run lint
```

### Format your code

To automatically format your code with Prettier:

```bash
npm run format
```

## Environment Variables

This project uses dotenv to manage environment variables.

Create a `.env` file in the root of your project and add your environment variables there.
Example `.env`:

```bash
PORT=3000
NODE_ENV=development
```

Access the variables in your code using:

```bash
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
```

Dependencies

- **express**: Web framework for building the server.
- **dotenv**: Loads environment variables from .env file.
- **nodemon**: Automatically restarts the server during development when changes are made.
- **ts-node**: Runs TypeScript files directly without needing to compile them.
- **tsc**: TypeScript compiler for compiling TypeScript files into JavaScript.
- **eslint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.
- **prettier**: Code formatter for consistent code style.

This version of the README is focused on manually cloning and renaming the template repository, which gives a quick start guide for setting up your project.

<!-- ## Setup

### 1. Initialize the Project

Run the following commands to initialize the project:

```bash
mkdir express-ts-app && cd express-ts-app
npm init -y
```

## Install Dependencies

```bash
# Install runtime dependencies
npm install express

# Install development dependencies
npm install typescript ts-node-dev nodemon @types/node @types/express --save-dev
```

## Configure TypeScript

Run the following command to create a tsconfig.json file:

```bash
npx tsc --init
```

Modify tsconfig.json with these options:

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Set Up the Project Structure

```
express-ts-app/
|__ dist/
├── src/
│   └── index.ts
├── tsconfig.json
├── nodemon.json
├── package.json
```

## Create `index.ts`

Add the following to `src/index.ts`:

```bash
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

```

## Configure Nodemon

Create a `nodemon.json` file in the root directory:

```bash
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["dist"],
  "exec": "ts-node-dev --respawn src/index.ts"
}
```

## Add Scripts to package.json

Update your package.json with these scripts:

```
"scripts": {
  "dev": "nodemon",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

## Run the Development Server

To start the server in development mode:

```bash
npm run dev
```

To build and run the server in production mode:

```bash
npm run build
npm start
```

### Notes

- Hot Reloading: Changes in your src files will automatically restart the server.
- Type Checking: TypeScript will ensure type safety during development. -->
