var palabra = 'afromorfa';
var palin = function(x){
    let ot= '';
    for(let i=x.length, y=0; i>0; i--, y++){
        ot = ot + x[i-1];
    }
    if(x=== ot){
        console.log(x + ' Si es una palabra palindroma')
    }else{
        console.log('No es palindroma')
    }
}


palin(palabra);