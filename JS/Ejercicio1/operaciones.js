ejecutar = function(){

    console.log("Ejecutando...");
    sumar(2,2);
    restar(3,1);
    procesar(sumar);
    procesar(function(x,y){
        let res=x+y;
        console.log("suma "+res);
    });
    procesar(restar);
    procesar((p,q)=>{
        console.log("producto: "+(p*q));
    });
    procesar((a,b)=>{
        console.log("valores:"+a+"-"+b);
    });
}

sumar = function(x,y){
    let res=x+y;
    console.log("suma "+res);
}

restar = function(x,y){
    let res=x-y;
    console.log("resta "+res);
}

procesar = function(fn){
    fn(60,70);
}