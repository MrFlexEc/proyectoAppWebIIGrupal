export interface IResRegistro{
    registros: Registro[];
}

export interface Registro{
_id?:string;
id_paciente: string;
id_plato: string;
fecha: string;
hora: string;
numero_de_calorias_consumida:string;
numero_de_Porciones:string;
}