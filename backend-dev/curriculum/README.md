# Chain Middleware to Create a Time Server

The description of this challenge and how chaining middleware works can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/chain-middleware-to-create-a-time-server).
Here is an example:
```javascript
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  
  next();
}, function(req, res) {
  res.send(req.user);
});
```

## Usage

The code for this challenge is in `router.js`. To see the output, visit
`http://host:port/chain-middleware/now` in your browser. The output should be similar
to this:
```json
{
	"time": "Tue Jan 02 2024 13:22:41 GMT-0800 (Pacific Standard Time)"
}
```
