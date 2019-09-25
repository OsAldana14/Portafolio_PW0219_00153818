var fibo = function(n){
    let n1=0;
     let n2=1;
     let aux=0;
     let arrfibo= [];
     arrfibo.push(n1);
     arrfibo.push(n2);
    for(let i=0; i<n-2; i++){
        aux= n1+n2;
        n1=n2;
        n2= aux;
        arrfibo.push(n2);
    }
    console.log(arrfibo);
}

fibo(10);