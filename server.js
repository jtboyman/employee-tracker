const db = require('./db/connection') //connects to the database
const express = require('express');
const apiRoutes = require('./apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//puts api prefix
app.use('/api', apiRoutes);

//default res
app.use((req, res) => {
    res.status(404).end();
});

//start server
db.connect(err => {
    if(err) throw err;
    console.log('Database connection established!');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    });
});