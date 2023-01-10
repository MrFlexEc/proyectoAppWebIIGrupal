import './style.css'
import axios from 'axios'

import {IRDeportista, Deportista} from "./interfaces/IDeportista"

const httpAxios=axios.create({
  baseURL:"http://localhost:8082/"
})


const app=document.querySelector<HTMLDivElement>("#app")!


app.innerHTML+=`
<body>
<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Deportistas</a></li>
    <li class="item"><a class="enlace" href="./cancha.html">Canchas</a></li>
    <li class="item"><a class="enlace" href="./deportista.html">Reservacion</a></li>
  </ul>
</nav>



<div class="container">



<label for="id">Identificador</label> <input type="text" id="idDeportista">
<label for="nombre">Nombre Deportista</label> <input type="text" id="nombre">
<label for="edad">edad</label> <input type="text" id="edad">
<label for="identificacion">identificacion</label> <input type="text" id="identificacion">
<label for="equipo_representa">Equipo que Representa</label> <input type="text" id="equipo_representa">


<button id="eliminarDeportista">Eliminar</button>
<button id="crearDeportista">Guardar</button>
<button id="consultarDeportista">consultar</button>



</div>

<div id="equipo_representa"></div>

</body>
`

const eliminarDeportista=document.querySelector<HTMLInputElement>("#eliminarDeportista")!
const crearDeportista=document.querySelector<HTMLInputElement>("#crearDeportista")!
const consultarDeportista=document.querySelector<HTMLInputElement>("#consultarDeportista")!


const idDeportista=document.querySelector<HTMLInputElement>("#idDeportista")!
const nombre=document.querySelector<HTMLInputElement>("#nombre")!
const edad=document.querySelector<HTMLInputElement>("#edad")!
const identificacion=document.querySelector<HTMLInputElement>("#identificacion")!
const equipo_representa = document.querySelector<HTMLInputElement>('#equipo_representa')!

eliminarDeportista.addEventListener("click",()=>{
  idDeportista.value=""
  nombre.value=""
  edad.value=""
  identificacion.value=""
  equipo_representa.value=""
})


consultarDeportista.addEventListener("click", async()=>{
const resDeportista:IRDeportista=await (await httpAxios.get<IRDeportista>("deportista")).data


const tabla=document.createElement("table")
tabla.id="tablaDeportista"
tabla.border="1"

const {deportistas}=resDeportista
console.log(deportistas)

for(const deportista of deportistas){
  const row =tabla.insertRow()
  const celda=row.insertCell()
  celda.innerHTML=`Descripcion: <button class="boton" value="${deportista._id}">${deportista.nombre}</button>`
}

equipo_representa.innerHTML=``
    equipo_representa.appendChild(tabla)

    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value
        const deportista:Deportista=await (await httpAxios.get<Deportista>(`deportista/${idx}`)).data
        idDeportista.value=deportista._id!
        nombre.value=deportista.nombre
        edad.value=deportista.edad
        identificacion.value=deportista.identificacion
        equipo_representa.value=deportista.equipo_representa
      })
    })
  })

crearDeportista.addEventListener("click",async()=>{
const data:Deportista={
  nombre:nombre.value,
  edad:edad.value,
  identificacion:identificacion.value,
  equipo_representa:equipo_representa.value
}

if(idDeportista.value.trim().length>0)
{

const resp:Deportista=await (await httpAxios.put<Deportista>(`deportista/update/?deportistaId=${idDeportista.value}`,data)).data
console.log(`El deportista ${resp.nombre} fue modificado con éxito`);
alert("El deportista fue modificado con exito")
return;
}
try{
  const resp: Deportista =  await (await httpAxios.post<Deportista>(`deportista/create`, data)).data
  console.log(`El deportista ${resp.nombre} fue grabado con éxito`);
  alert("El deportista fue grabado con exito")


}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}

}
})


