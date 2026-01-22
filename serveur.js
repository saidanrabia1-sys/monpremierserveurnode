// Ici, je code mon serveur

/* J'import le package (module) http. 
Le module HTTP est stocké dans la variable http. 
L'instructiin require() permet d'importer le module.
*/
const http = require("http");

// Maintenant, je crée mon serveur en utilisant le package HTTP
const serveur = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur!");
});


// Je précise l'adresse et le port du serveur
serveur.listen(3000);