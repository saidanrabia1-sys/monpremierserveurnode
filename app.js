// Ici, nous créons notre application ExpressJs

// J'importe le framework Expressejs.
const express = require('express');

// J'initialise une application express
const app = express();


app.use((req,res,next) => {
    console.log("Je suis un middleware dans le serveur");
    next();
});

/* Je suis un Milddeware 2 pou retouener la réponse au client lorsqu'il fait la 
reqêute localhost:3000. La réponse est au format JSON */
app.use((req,res) => {
    res.json({ message: "Vous êtes bien sur le serveur Ndovoo!"});
  
});

// J'utilise un Middleware 3 pour afficher le message dans la console 
app.use((req,res,next) => {
    console.log("Bonjour, je suis dans le serveur!");

});



/**
 * J'exporte l'application express sous forme de module
 * Ainsi, l'application app peut être importée dans d'autre fichiers JS.
 */
module.exports = app;
