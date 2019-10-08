
class Fetcher {
//clave api RYmbU8tBEcI7pFqZeK9QCqCpGj8NDMOYjci9ISn1
//ejemplo https://api_basics.fda.gov/drug/event.json?api_key=yourAPIKeyHere&search=...
//ejemplo de busqueda https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1
    constructor(url) {
        this.url = url;
    }

    search() {
        fetch(this.url)
            .then(res => res.json()) //respuesta con json
            .then(data => {
                console.log('url es ', data);
            })
    }
} //Clase para manejar el uso de fetch, de acuerdo a lo ingresado en las fechas¿?

//Instancias

//let fetcher = new Fetcher('la url');
const fetcher = new Fetcher('https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:%22fatigue%22&limit=1');
fetcher.search();


/* class DomWritter { //Clase para manejar el DOM
    
    element;

    constructor(id) {
        this.element = document.getElementById(id);
        console.log('mostrando a element ', this.element);
    }



} */
