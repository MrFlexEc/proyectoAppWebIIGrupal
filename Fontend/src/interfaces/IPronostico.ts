export interface IPronostico{
    pronosticos: Pronostico[];
}

export interface Pronostico{
    _id?:string;
    apostadorID: string;
    EncuentroDeportivoID: string;
    ResultadoPropuesto: string;
    ValorApuesta: number;
    Ganancia: number;
}