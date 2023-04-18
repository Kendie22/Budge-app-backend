// here I'll create and configure my express app

const express = require("express");
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController")


const app = express();
app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    res.send(`Welcome to Budget App! For Docs, please visit <a href="https://github.com/Kendie22/Budget-app-backend.git"> here </a> `
    );
});


app.use("/transactions", transactionsController);



module.exports = app;