# CSV-Parser project

This project is configured to use TypeScript with ECMAScript modules (ES modules) in Node.js.

## Prerequisites

- Node.js (version 14 or later is recommended for full ES modules support)
- npm (or yarn, depending on your preference)

## Getting Started

To get started with this project, clone the repository and install its dependencies.

```bash
git clone https://github.com/MrUddh/CSV-parser
cd CSV-parser
npm install
```

## Project Structure

The project is organized into the following directory structure:

- src/: Contains all TypeScript source files.
- dist/: Contains compiled JavaScript files, generated by the TypeScript compiler.
- tsconfig.json: Configures TypeScript compiler options.
- package.json: Defines project metadata and dependencies.
- analysisOutput.txt: a file containing the result from running the analysis program.

## Development

To compile TypeScript source files into JavaScript using the configured ES modules syntax, run:

```bash
npm run build
```

This command will clean the dist/ directory and compile the TypeScript files from src/ to dist/ using the ESNext module system.

## Running the Project

After building the project, you can run the compiled JavaScript with Node.js:

```bash
npm run dev
```

- You will now see a "analysisOutput.txt"-file in your root as well as a set of logs with the analytics stats.