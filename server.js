const express = require("express");

const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 80
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Server API is now in ${PORT}.`);
});