const express = require("express");


var PORT = process.env.PORT || 4200
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-route")(app);
require("./routes/api-route")(app);

app.listen(PORT, () => {
    console.log(`Server API is now in ${PORT}.`);
});