# Request Header Parser API - FCC Backend Development and APIs Project

## Overview

This is a simple REST API that returns a JSON object with the request headers when
a GET request is made to the /api/whoami endpoint.

Full desciption of the project can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

## Usage

Simply going to `http://host:port/api/whoami` returns the following results.

```
{
  "ipaddress": "::1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
}
```
