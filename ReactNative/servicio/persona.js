this.personas = [{ id: 10, nombre: "Juan",telefono:"2" },
{ id: 20, nombre: "Pedro",telefono:"3" },
{ id: 30, nombre: "Pepe",telefono:"4"  }
];

export const recuperarPersonas=(personas)=>{
    return personas;
}

export const agregarPersona=(personas)=>{
    let posicion=buscar(persona);
    if(posicion==-1){
        personas.push(persona);
    }
}

export const eliminarPersona=(personas)=>{
    let posicion=buscar(persona);
    if(posicion!=-1){
        personas.splice(posicion,1);
    }
}

const buscar=(persona)=>{
    let indice=-1;
    for(let i=0;i<personas.length;i++){
        if(personas.id==personas[i].id){
                indice=1;
                break;


        }

    }

}

