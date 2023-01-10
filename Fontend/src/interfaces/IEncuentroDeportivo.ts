

export interface IEncuentroDeportivo{

    EncuentrosDeportivos:EncuentroDeportivo[]
}

export interface EncuentroDeportivo{
    _id?:string;
    Equipo1:string
    Equipo2:string
    Fecha:string
    Hora:string
}