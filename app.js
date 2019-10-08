
class Fetcher {
    // Variables
    urlBase = 'https://api.fda.gov/drug/event.json?search=';
    limit = '&limit=1';
    startDate = '[20040101+TO';
    endDate = '+20081231]';
    urlConsult = this.urlBase + this.startDate + this.endDate + this.limit;

    constructor() {}

    search() {
        fetch(this.urlConsult)
            .then(res => res.json()) //respuesta con json
            .then(data => {
                console.log('Contenido de la API', data);
            });
    }
}
//Instancias
let fetcher = new Fetcher('url');
fetcher.search();
/* const fetcher = new Fetcher('https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:%22fatigue%22&limit=1');
fetcher.search();  */

/* class DomWritter { //Clase para manejar el DOM
    
    element;

    constructor(id) {
        this.element = document.getElementById(id);
        console.log('mostrando a element ', this.element);
    }



} */
