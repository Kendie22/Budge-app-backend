//Here I'll use environment variables (envvars) start my server and other services

require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3333;
app.listen
    (port, () => {
        console.log(`Server listening on port ${port}`)
    })