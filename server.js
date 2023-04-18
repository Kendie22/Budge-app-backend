//Here I'll use environment variables (envvars) start my server and other services

require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3333;
app.listen
    (PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })