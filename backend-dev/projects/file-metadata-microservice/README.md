# File Metadata Microservice

## Overview

This service provides information about the metadata of an uploaded file.

Full description of the project can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice)

## Usage

This service works by first uploading a file to `http://host:port/file-metadata`.
The following is an example of what is returned after a successful upload.

```json
{
  "originalname": "headshot_1024.JPEG",
  "encoding": "7bit",
  "mimetype": "image/jpeg",
  "size": 357515
}
```
