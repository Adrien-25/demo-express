const express = require("express");
const port = 3000;

const app = express();

app.get("/",(requete, response)=> {
    response.send("Bonjour le monde");
});

app.listen(port, () => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`);
});
