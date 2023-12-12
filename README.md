# Timestamp Microservice - FCC Backend Development and APIs Project

## Overview

Simple REST API that takes a given date or epoch time and responds with a JSON
containing the epoch time and the UTC date of the passed request parameters.

## Usage

The following steps will get you setup with the project.

1. `git clone` the repository.
2. Run `npm install`
3. Run `npm start` or `npm run dev` to use `nodemon`

Once you have a server up and running, you can send requests similar to this

```
// GET /api/2022-06-16
// GET /api/06-16-2022
// GET /api/1655385600
{
  "epoch": 1655385600,
  "natural": "June 16, 2022"
}
```
