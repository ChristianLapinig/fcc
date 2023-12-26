# Timestamp Microservice - FCC Backend Development and APIs Project

## Overview

Simple REST API that takes a given date or epoch time and responds with a JSON
containing the epoch time and the UTC date of the passed request parameters.

Full desciption of the project can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)

## Usage
The API takes an epoch time or date which can be passed as a param into 
`http://host:port/api/:date`. Below is an example of the formats and the returned
JSON for a successful request. 
```
// GET /api/2022-06-16
// GET /api/06-16-2022
// GET /api/1655385600
{
  "epoch": 1655385600,
  "natural": "June 16, 2022"
}
```
