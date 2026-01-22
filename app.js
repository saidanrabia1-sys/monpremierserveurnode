// Ici, nous créons notre application ExpressJs

// J'importe le framework Expressejs.
const express = require('express');

// J'initialise une application express
const app = express();


app.use((req,res) => {
    res.end("Bonjour, je suis le serveur!")
});


/**
 * J'exporte l'application express sous forme de module
 * Ainsi, l'application app peut être importée dans d'autre fichiers JS.
 */
module.exports = app;
