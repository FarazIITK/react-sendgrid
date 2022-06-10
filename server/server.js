const express = require("express");

const port = process.env.PORT || 3001;

const app = express();

function respondText(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hi');
}

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

