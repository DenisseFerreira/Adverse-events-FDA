class Fetcher {
    // Variables
    urlBase = '';
    limit = '';
    startDate = '';
    endDate = '';
    
    constructor(urlBase) {
        this.urlBase = urlBase;
    }

    search(startDate, endDate, limit) {
        this.urlConsult = this.urlBase + startDate + endDate + limit;
        fetch(this.urlConsult)
            .then(res => res.json()) //respuesta con json
            .then(data => {
                console.log('Contenido de la API', data.results);
                data.results.forEach(element => {
                    console.log(element);
                    document.getElementById('itemResult').innerHTML += `${element.companynumb} <br>`;
                });

            });
    }
}
//Instancias
let fetcher = new Fetcher('https://api.fda.gov/drug/event.json?search=');
fetcher.search('[20040101+TO', '+20081231]', '&limit=10');
//console.log(fetcher.search());

//document.getElementById('itemResult').innerHTML = `${JSON.stringify(fetcher.search())}`;

/* class DomWritter { //Clase para manejar el DOM
    
    element;

    constructor(id) {
        this.element = document.getElementById(id);
        console.log('mostrando a element ', this.element);
    }



} */
