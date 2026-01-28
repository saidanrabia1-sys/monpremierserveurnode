// Ici nous créons notre application ExpressJs

// J'importe le framework ExpressJs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();

app.use((req, res, next) => {
    console.log("Bonjour, je suis le serveur!");
    next();
});

// app.use((req, res,next) => {
//     res.json({ message: "vous êtes bien sur le serveur Ndovoo" });
//     next();
// });

app.use((req, res, next) => {
    console.log("Encore, je suis le serveur!");
    next();
});

app.use((req, res, next) => {
    console.log("Je suis dans le serveur!");
    next();
});

// J'ajoute un middleware qui gère la sécurité d'accès 
app.use((req, res, next) => {
    // Je permets l'accès à mon API depuis n'importe quel origin
    res.setHeader('Access-Control-Allow-Origin', '*');

    /* J'autorise certaines en-têtes dans les requêtes reçues dans notre API. Les en-têtes autorisées sont :
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' */
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    // J'autorise d'envoyer des requêtes avec les méthodes : 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Je dessine mes routes avec Express

app.get('/api/fruit', (req, res) => {
    console.log("Je passe dans la route /api/fruit!");
    // Mon tableau de fruits
    const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "Fruit saisonnier riche en vitamine C",
            prix: 3
        },
        {
            id: 2,
            nom: "papaye",
            description: "Fruit saisonnier riche en vitamine C",
            prix: 4
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruits
    res.status(200).json(fruit);
});

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Mon poste !'
    });
    next();
});

app.put('/api/fruit/:id', (req, res) => {
    console.log("Appel à /api/fruit avec la méthode PUT");
    res.status(200).json({ message: 'Fruit modifié avec succès !' });
});


/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;

