

export interface IRPaciente{

    pacientes:Paciente[]
}

export interface Paciente{
    _id?:string;
    nombre:string
    identificacion:string
    edad:string
    altura:string
}