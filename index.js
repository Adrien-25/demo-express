const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, './phantom')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views'));

app.get("/",(requete, response)=> {
    response.render('pages/generic',{pageTitle: "Bienvenue sur la boîte à musique"});
});
app.get("/catalogue",(requete, response)=> {
    response.render('pages/catalogue',{pageTitle: "Voici le catalogue"});
});
app.get("/apropos",(requete, response)=> {
    response.render('pages/generic',{pageTitle: "A propos de la boite à musique"});
});

app.listen(port, () => {
    console.log(`Le serveur est démarré sur http://localhost:${port}`); 
});
