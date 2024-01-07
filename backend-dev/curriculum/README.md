# Serve JSON on a Specific Route 

The description for this challenge and how to serve JSON to a specific route in 
Express can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/serve-json-on-a-specific-route).

## Usage

The code for this challenge can be found in `router.js`. JSON can simply be served
to a specific route using the `json()` method on the `res` object. Here is an example,

```javascript
router.get("/json", (req, req) => {
	res.json({ name: "Steph Curry" });
});
``` 

When the endpoint `/json` is visited, this is the following response:

```json
{
	"name": "Steph Curry"
}
```
