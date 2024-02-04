require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");

const App = require("./src/App.jsx").default;

const PORT = process.env.PORT || 8080;
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static("dist"));

// Define a route to render your React application
app.get("/", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
