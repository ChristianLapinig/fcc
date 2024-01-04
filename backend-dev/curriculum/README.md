# Serve Static Assets 

The description for this challenge and how to serve static assets in Express can be
found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/serve-static-assets).

## Usage

The code for this challenge can be found in `index.js` in the root directory. To use
static assets, we would have to configure Express to refer to the directory static assets
will be stored. Here is an example:
```javascript
// Configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public")); // Serve static assets
``` 
Anything in the public folder is now accessible via `http://host:port/public/path/to/asset`.
An example of this would be `http://localhost:8080/public/styles/styles.css`. Here,
The contents of `styles.css` would be displayed in the browser.
