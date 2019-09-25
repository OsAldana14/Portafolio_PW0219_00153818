var comparador = function(x,y){
    let r=0;
    for(let i=0; i< x.length; i++){
    if(y==x[i]){
        r++;
    }
    if(i==x.length-1){
        console.log('En el arreglo se encontraron '+r + ' ocurrencias del numero '+y)
    }
    }
}

comparador(num, 3);