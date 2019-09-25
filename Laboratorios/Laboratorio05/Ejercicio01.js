/* ----- 1 -----*/ 
var typo = function(x){
    var arrtypes = []
    arrtypes.push(typeof x[0])
    arrtypes.push(1)
    for(let i=1; i< x.length; i++){
        if(!arrtypes.includes(typeof x[i])){
            arrtypes.push(typeof x[i])
            arrtypes.push(1)
        }else{
            arrtypes[arrtypes.indexOf(typeof x[i])+1] = arrtypes[arrtypes.indexOf(typeof x[i])+1] +1; 
        }
    }
    console.log(arrtypes)
}

var x = [1, 'hola', 32, ['hola', 'como', 'estas'], 3, 4, true, x, typo];

typo(x);