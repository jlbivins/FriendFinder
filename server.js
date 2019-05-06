var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;

// Sets up static folder
 app.use(express.static(path.join(__dirname,'/public')))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Place Routes Here

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)







app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));