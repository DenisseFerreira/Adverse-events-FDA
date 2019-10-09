//console.log('Prueba de api');
//clave api RYmbU8tBEcI7pFqZeK9QCqCpGj8NDMOYjci9ISn1
//ejemplo https://api_basics.fda.gov/drug/event.json?api_key=yourAPIKeyHere&search=...
//ejemplo de busqueda https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1
    // el 'y' es +AND+ el 'o' es +
    //para buscar fechas [2004-01-01+TO+2005-01-01]
    //evento adverso y fecha en duro https://api.fda.gov/drug/event.json?search=events+AND+adverse+[2019-10-01+TO+2019-10-08]&limit=1
   // sintaxis de busqueda search=field:term  (busqueda es igual a campo y su termino)
   //Ejemplo de busqueda https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1

// Variables
let urlBase = 'https://api.fda.gov/drug/event.json?search=';
let limit = '&limit=1';
let startDate = '[20040101+TO';
let endDate = '+20081231]';
let urlConsult = urlBase + startDate + endDate + limit;

/* urlConsult = urlBase + startDate + endDate + limit; */
//console.log('Consultando url: ', urlConsult);

//Usando FETCH
fetch(urlConsult)
    .then(res => res.json()) //respuesta con json
    .then(data => {
        //console.log('Contenido de la API', data);  
    });
