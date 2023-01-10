export interface IResReservacion{
    reservaciones: Reservacion[];
}

export interface Reservacion{
_id?:string;
canchaID:string;
deportistaID:string;
fecha_separacion: string;
hora_inicio: string;
hora_fin: string;
}