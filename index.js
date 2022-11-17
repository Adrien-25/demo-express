const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, './phantom')));

app.get("/",(requete, response)=> {
    response.sendFile(path.join(__dirname, './phantom/index.html'));
});
app.get("/apropos",(requete, response)=> {
    response.sendFile(path.join(__dirname, './phantom/generic.html'));
});

app.listen(port, () => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`); 
});
