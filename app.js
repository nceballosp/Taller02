const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes'); 
const path = require('path');
  
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
