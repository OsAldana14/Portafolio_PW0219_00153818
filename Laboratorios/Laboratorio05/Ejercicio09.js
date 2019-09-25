var circ = function(r){
    let pi = Math.PI;
    if(r <=0){
       console.log(-1)
    }else{
        let area= pi* Math.pow(r,2)
        console.log('El area es igual a: '+area )
    }
}
circ(5);