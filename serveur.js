// Ici, je code mon serveur

/* J'import le package (module) http. 
Le module HTTP est stocké dans la variable http. 
L'instructiin require() permet d'importer le module.
*/
const http = require("http");

// J'importe l'application express app.js
const app = require('./app');

const numPort = 3003;

// Je configure le numéro du port utilisé dans le serveur
app.set('port', numPort);

// Maintenant, je crée mon serveur en utilisant le package HTTP

const server = http.createServer(app);

/*const serveur = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur!");
});*/

// Je récupère l'adresse de le port du serveur 
const date = new Date();

// Je précise l'adresse et le port du serveur
server.listen(numPort, () => {
    console.log("Le serveur tourne sur le port", numPort);
    console.log( date.toLocaleDateString());
    console.log(date.toLocaleTimeString());
});

