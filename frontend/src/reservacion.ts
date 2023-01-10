import './style3.css'
import axios from "axios";
import {IResReservacion, Reservacion} from "./interfaces/IReservacion";


const httpAxios=axios.create({
  baseURL:"http://localhost:8082/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
app.innerHTML+=`

<body>
<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Deportistas</a></li>
    <li class="item"><a class="enlace" href="./cancha.html">Canchas</a></li>
    <li class="item"><a class="enlace" href="./reservacion.html">Reservacion</a></li>
  </ul>
</nav>


<div class="container">
<label for="id">Id</label>  <input id="id" />
<label for="canchaID">Id Cancha</label>  <input id="canchaID" />
<label for="deportistaID"> Id Deportista</label> <input id="deportistaID">
<label for="fecha_separacion">Fecha de separacion</label> <input id="fecha_separacion"/>
<label for="hora_inicio">hora de inicio</label> <input id="hora_inicio"/>
<label for="hora_fin">hora fin</label> <input id="hora_fin"/>

<button id="agregar">agregar</button>
<button id="guardar">guardar</button>
<button id="consultar">Consultar</button>
</div>


</body>
<div id="cuerpo"> </div>

`
const agregar=document.querySelector<HTMLButtonElement>("#agregar")!
const guardar=document.querySelector<HTMLButtonElement>("#guardar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id=document.querySelector<HTMLInputElement>("#id")!
const canchaID=document.querySelector<HTMLInputElement>("#canchaID")!
const deportistaID=document.querySelector<HTMLInputElement>("#deportistaID")!
const Fecha_separacion=document.querySelector<HTMLInputElement>("#Fecha_separacion")!
const hora_inicio=document.querySelector<HTMLInputElement>("#hora_inicio")!
const hora_fin=document.querySelector<HTMLInputElement>("#hora_fin")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
agregar.addEventListener("click", ()=>{
  id.value=""
  canchaID.value=""
  deportistaID.value=""
  Fecha_separacion.value=""
  hora_inicio.value=""
  hora_fin.value=""
})


consultar.addEventListener("click", async()=>{
  const respReservaciones:IResReservacion=await (await httpAxios.get<IResReservacion>("reserva")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {reservaciones}=respReservaciones;
  console.log(respReservaciones)
  

  for (const reservacion of reservaciones)
    {
      console.log(reservacion)
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${reservacion._id}">${reservacion.fecha_separacion}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${reservacion._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;

        const reservacion:Reservacion=await (await httpAxios.get<Reservacion>(`reservacion/${idx}`)).data
        console.log(reservacion)
        id.value=reservacion._id!.toString()
        canchaID.value=reservacion.canchaID.toString()
        deportistaID.value=reservacion.deportistaID.toString()
        Fecha_separacion.value=reservacion.fecha_separacion!.toString()
        hora_inicio.value=reservacion.hora_inicio.toString()
        hora_fin.value=reservacion.hora_fin.toString()
      })
    })
  })

    guardar.addEventListener('click',async ()=>{
      const data:Reservacion= {
        _id:id.value.toString(),
        canchaID:canchaID.value.toString(),
        deportistaID: deportistaID.value.toString(),
        fecha_separacion: Fecha_separacion.value.toString(),
        hora_inicio:hora_inicio.value.toString(),
        hora_fin:hora_fin.value.toString(),
        }
    
      if (id.value.trim().length>0 )
      {
        //        
        const resp: Reservacion = await (await httpAxios.put<Reservacion>(`reservacion/?reservacionId=${id.value}`, data)).data
       // {acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1} esto regresa
        
        console.log(`La reservación fue modificada con éxito`);
        
        return;
      }
      try {
        const resp: Reservacion =  await (await httpAxios.post<Reservacion>(`reservacion/create`, data)).data
       
        console.log(`La reservacion ${resp._id} fue guardada con éxito`);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
        }
      }
    })