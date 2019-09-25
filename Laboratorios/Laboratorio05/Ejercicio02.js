var sumador = function(x){
    let r=0;
    for(let i=0; i< x.length; i++){
        r = r +  x[i];
        if(i == x.length-1){
            console.log('La suma de los datos es: '+r)
            let prom= r/x.length;
            console.log('El promedio es: '+prom)
        }
    }
    r=0;
}
var num = [1, 2, 3,4,1 , 2 , 3 , 4 , 3 , 3 , 3, 3, 3];
sumador(num);