

class DomWritter { //Clase para manejar el DOM
    nodoPadre;
    nodoHijo;

    constructor(idHtml) {
        //console.log(idHtml)
        this.nodoPadre = document.getElementById(idHtml);
    }  
    
    
    addSon(farmaco) {
        //creacion del hijo   generic_name
        farmaco.patient.reaction.forEach(item=>{
            // console.log('item'+ item);
            let elemento = document.createElement('li');
            //let contenido = document.createTextNode(farmaco.companynumb); // results.patient.reaction[i]
            let contenido = document.createTextNode('Reaccion Adversa: '+ item.reactionmeddrapt); 
            elemento.appendChild(contenido);
            this.nodoPadre.appendChild(elemento); 
        })
    }
}

class Fetcher {
    // Variables    
    //urlBase = '';   
    limit = '&limit=';
    startDate = '';
    endDate = '';

    constructor(urlBase) {
        this.urlBase = urlBase;
    }

    search(startDate, endDate, limit) {
        //instancias DomWritter       
        const result = new DomWritter('adverseEffectsList'); //esto se va al constructor               
        this.urlConsult = this.urlBase + startDate + endDate + limit;
        console.log(this.urlConsult);
        fetch(this.urlConsult)
            .then(res => res.json()) //respuesta con json            
            .then(data => {
                console.log('Contenido de la API', data.results);
                data.results.forEach(element => {
                    console.log(element);
                    //llamamos al metodo agregar Hijo                  
                    result.addSon(element);
                });
            });
    }
}

//Instancias
let fetcher = new Fetcher('https://api.fda.gov/drug/event.json?search=');
document.getElementById('btnSearch').addEventListener('click', () => {
    let startDate = document.getElementById('startDate').value;
    startDate = startDate.replace(/-+/g, '')
    //console.log('fecha incio es: ', startDate);
    let endDate = document.getElementById('endDate').value;
    endDate = endDate.replace(/-+/g, '');
    //console.log('fecha fin es: ', endDate);
    let valueLimit = document.getElementById('inputLimit').value;
    //console.log('input funciona : ', valueLimit);
    fetcher.search('[' + startDate + '+TO', '+' + endDate + ']', '&limit=' + valueLimit);
})
