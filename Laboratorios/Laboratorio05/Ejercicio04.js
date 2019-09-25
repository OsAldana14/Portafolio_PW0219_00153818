function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var adivina = function(){
    var arre= [];
    for(let i=0; i<20;i++){
        let nam= getRandomInt(20);
        arre.push(nam);
    }
    var adinum = prompt('Adivine un numero del 0 al 20');

    for(var i=0; i<20; i++){
        if(arre[i] == adinum){
            console.log('Ganaste!!!!!')
            break;}
            else if(i==19){
                console.log("Perdiste Suerte a la proxima")
            }
            
    }

adinum=0;
arre = [];
}

adivina();