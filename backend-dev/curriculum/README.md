# Get Route Parameter Input from Client

The description for this challenge and how to get route parameter inputs can be found
[here](https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/get-route-parameter-input-from-the-client)

## Usage
With your server running, the route `/:word/echo` is defined where `:word` is the
parameter that is sent with the request and will be included in the `req.params` object.
For example, visiting `/cmc/echo` returns the following JSON response

```json
{
	"echo": "cmc"
}
```
