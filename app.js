// Icin nous créos notre application ExpressJs

// j'importe le framewordk Expressjs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();

app.use((req, res, next) => {
    console.log("bonjour,je suis le serveur!");
    next();
});

// app.use((req, res,next) => {
//     res.json({ message: "vous êtes bien sur le serveur Ndovoo" });
//     next();
// });

app.use((req,res,next) => {
    console.log("Encore, je suis le serveur!");
    next();
});



app.use((req, res,next) => {
    console.log("je suis dans le serveur!");
    next();
    
});

// J'ajoute un middleware qui gère la sécurité d'accès 
app.use((req,res)=> {
    // Je permet l'accès à mon API depuis n'importe quel origin
    res.setHeader('Access-Control-Allow-Origin','*');

    /* J'autorise certaines en-têtes dans les requêtes  reçues dans notre API . Les en-têtes autorisées sont :
    'Origin, X-Requested-With, Content,Accept, Content-Type, Authorization' */
    res.setHeader('Access-Control-Allow-Origin, X-Requested-With, Content,Accept, Content-Type, Authorization');

    // J'autorise d'envoyer des requêtes avec les méthodes : 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();


});


// je déssine mes Routes avec Express

app.use((req,res) => {
    console.log("je passe dans la route /api/fruit!");
    // mon fruit
    const fruit = [
        {
            id: 1,
            nom:"pomme",
            description: "fruit saisonier riche en vitamine C",
            prix: 3
        },

        {
            id: 2,
            nom:"payaye",
            description: "fruit sasioner riche en vitamine C",
            prix: 4
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruit

    res.json(fruit);
});

/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;

