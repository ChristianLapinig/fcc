# URL Shortener

## Overview

This service generates a shortened URL for a given link. For example, `https://google.com`
is shortened to `http://host:port/<unique-identifier>`.

Full desciption of the project can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

# Setup

In your `.env` file, set the `MONGO_URI` variable to your MongoDB Atlas link. Below
is an example of the URI that should be used.

```
mongodb+srv://db-username:db-password@yourcluster.k5ozmfh.mongodb.net/UrlShortener?retryWrites=true&w=majority
```

This URI can be found in your MongoDB Atlas dashboard.

## Usage

A URL can be submitted to `http://host:port/url-shortener`. Once the form is
submitted, the following JSON will be returned.

```json
{
  "urlId": "sIjBB2",
  "originalUrl": "https://leetcode.com/",
  "clicks": 0,
  "date": "2023-12-26T18:59:22.039Z",
  "_id": "<mongo-id>",
  "__v": 0
}
```

Visiting a shortened link will increase its "click" count. Using the example above,
`http://host:port/sIjBB2` will redirect you to https://leetcode.com and increase
the click count for the link.
