# FCC Curriculum and Projects

## Overview

This repository contains my projects and finished curriculum for all of the
FreeCodeCamp material. This repository is meant to be for educational purposes.

PLEASE NOTE: This repository is meant for educational purposes and acts as a guide for
the challenges and projects in FreeCodeCamp and not as a direct submission. Most projects
and challenges will fail due to the way the code for this repository is setup. For example,
the projects for "Backend Development and APIs" section will not pass as they test
for specific routes to be called. The expectation from FreeCodeCamp is that your submissions 
should be separate projects compared to here where everything is in one place. 

To see the answer for the curriculum and projects, branches dedicated to each solution
have been created and have a structure similar to this, `backend-dev/projects/file-metadata`
or `backend-dev/curriculum/chain-middleware`.

## Installation

You can follow the steps below to install and run the code:

1. Fork the repository
2. Clone your fork to your local system (`git clone https://github.com/YourUserName/fcc`)
3. After cloning the repository, follow the steps to install the dependencies

```bash
$ cd fcc
$ npm install
```

4. Copy `.env.sample` to a `.env` file.

```bash
$ cp .env.sample .env
```

- Please note: You need to set MONGO_URI to your Mongo URI. More information on
  getting setup with MongoDB and connecting with your code can be found
  [here](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)

5. Run the server.

```bash
$ npm start

# Or run it using nodemon. Scripts are found in package.json

$ npm run dev
```

## Usage

Usage documentation to the curriculum and projects can be found below.

### Backend Development and APIs

#### Curriculum
- [Serve an HTML File](https://github.com/ChristianLapinig/fcc/tree/backend-dev/curriculum/serve-html/backend-dev/curriculum)
- [Serve Static Assets](https://github.com/ChristianLapinig/fcc/tree/backend-dev/curriculum/serve-static-assets/backend-dev/curriculum)
- [Serve JSON on a Specific Route](https://github.com/ChristianLapinig/fcc/tree/backend-dev/curriculum/serve-json/backend-dev/curriculum)
- [Use the `.env` File](https://github.com/ChristianLapinig/fcc/tree/backend-dev/curriculum/dot-env-files/backend-dev/curriculum)
- [Chain Middleware to Create a Time Server](https://github.com/ChristianLapinig/fcc/tree/backend-dev/curriculum/chain-middleware/backend-dev/curriculum)

#### Projects

1. [Timestamp Microservice](https://github.com/ChristianLapinig/fcc/tree/master/backend-dev/projects/timestamp-microservice)
2. [Request Header Parser](https://github.com/ChristianLapinig/fcc/tree/master/backend-dev/projects/request-header-parser)
3. [URL Shortener](https://github.com/ChristianLapinig/fcc/tree/master/backend-dev/projects/url-shortener)
4. [File Metadata Microservice](https://github.com/ChristianLapinig/fcc/tree/master/backend-dev/projects/file-metadata-microservice)
