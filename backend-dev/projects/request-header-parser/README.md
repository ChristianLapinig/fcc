# Request Header Parser API - FCC Backend Development and APIs Project

## Overview

This is a simple REST API that returns a JSON object with the request headers when
a GET request is made to the /api/whoami endpoint.

Full desciption of the project can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

## Usage

The following steps will get you setup with the project.

1. `git clone` the repository.
2. Run `npm install`
3. Run `npm start` or `npm run dev` to use `nodemon`

Once you have a server up and running, a request to `/api/whoami` should return
something similar to this:

```
{
  "ipaddress": "::1",
  "host": "localhost",
  "language": "en-US,en;q=0.9",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "acceptEncoding": "gzip, deflate, br",
  "connection": "keep-alive",
  "cookie": "org.cups.sid=84556970db85c64c6765dcff1227ba12"
}
```
