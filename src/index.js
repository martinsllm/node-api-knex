const express = require('express');

const app = express();
app.use(express.json());

app.use(require('./routes'));

//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});

app.listen(8080, () => console.log('The server is running!'));