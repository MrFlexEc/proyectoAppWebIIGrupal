

export interface IRDeportista{
    deportistas: Deportista[]
}

export interface Deportista{
    _id?:string;
    nombre: string;
    edad: string;
    identificacion: string;
    equipo_representa: string;
}


/*la interface debe tener escrito los atributos 
de la misma manera que estan en la base de datos
o como aparece al hacer un console log en la 
*/