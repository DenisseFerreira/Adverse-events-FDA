class Fetcher {
    // Variables
    //urlBase = '';
    limit = '&limit=';
    startDate = '';
    endDate = '';

    constructor(urlBase) {
        this.urlBase = urlBase;
    }

    search(startDate, endDate, limit) {
        this.urlConsult = this.urlBase + startDate + endDate + limit;
        console.log(this.urlConsult);
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

document.getElementById('btnSearch').addEventListener('click', () => {
    let startDate = document.getElementById('startDate').value;
    startDate = startDate.replace(/-+/g, '')
    console.log('fecha incio es: ', startDate);
    let endDate = document.getElementById('endDate').value;
    endDate = endDate.replace(/-+/g, '');
    console.log('fecha fin es: ', endDate);
    let valueLimit = document.getElementById('inputLimit').value;
    console.log('input funciona : ', valueLimit);

    fetcher.search('['+startDate+'+TO', '+'+endDate+ ']', '&limit='+valueLimit);
})

//console.log(fetcher.search());



//document.getElementById('itemResult').innerHTML = `${JSON.stringify(fetcher.search())}`;



class DomWritter { //Clase para manejar el DOM

    constructor(){}
 /*    element;

    constructor(id) {
        this.element = document.getElementById(id);
        console.log('mostrando a element ', this.element);
    } */



}
