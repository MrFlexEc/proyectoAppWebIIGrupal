import './style.css'
import axios from 'axios'

import {IApostador, Apostador} from "./interfaces/IApostador"

const httpAxios=axios.create({
  baseURL:"http://localhost:3000/"
})


const app=document.querySelector<HTMLDivElement>("#app")!


app.innerHTML+=`
<body>
<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Apostador</a></li>
    <li class="item"><a class="enlace" href="./encuentrodeportivo.html">Encuentro Deportivo</a></li>
    <li class="item"><a class="enlace" href="./pronostico.html">Pronóstico</a></li>
  </ul>
</nav>
<div class="container">



<label for="id">Identificador</label> <input type="text" id="idApostador">
<label for="Nombre">Nombre</label> <input type="text" id="Nombre">
<label for="calidad">Calidad</label> <input type="text" id="calidad">
<label for="peso">Peso</label> <input type="text" id="peso">


<button id="limpiarApostador">Limpiar</button>
<button id="crearApostador">Grabar</button>
<button id="consultarApostador">consultar</button>



</div>

<div id="cuerpo"></div>


</body>
`

const limpiarApostador=document.querySelector<HTMLInputElement>("#limpiarApostador")!
const crearApostador=document.querySelector<HTMLInputElement>("#crearApostador")!
const consultarApostador=document.querySelector<HTMLInputElement>("#consultarApostador")!


const idApostador=document.querySelector<HTMLInputElement>("#idApostador")!
const Nombre=document.querySelector<HTMLInputElement>("#Nombre")!
const Identificacion=document.querySelector<HTMLInputElement>("#identificacion")!
const Celular=document.querySelector<HTMLInputElement>("#celular")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

limpiarApostador.addEventListener("click",()=>{
  idApostador.value=""
  Nombre.value=""
  Identificacion.value=""
  Celular.value=""
})


consultarApostador.addEventListener("click", async()=>{
const resApostador:IApostador=await (await httpAxios.get<IApostador>("apostador")).data


const tabla=document.createElement("table")
tabla.id="tablaApostador"
tabla.border="1"

const {apostadores}=resApostador
console.log(apostadores)

for(const Apostador of apostadores){
  const row =tabla.insertRow()
  const celda=row.insertCell()
  celda.innerHTML=`Descripcion: <button class="boton" value="${Apostador._id}">${Apostador.Nombre}</button>`
}

cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)

    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value
        const Apostador:Apostador=await (await httpAxios.get<Apostador>(`plato/${idx}`)).data

        idApostador.value=Apostador._id!
        Nombre.value=Apostador.Nombre
        Identificacion.value=Apostador.Identificacion
        Celular.value=Apostador.Celular
      })
    })
  })

crearApostador.addEventListener("click",async()=>{
const data:Apostador={
  Nombre:Nombre.value,
  Identificacion:Identificacion.value,
  Celular:Celular.value
  
}

if(idApostador.value.trim().length>0)
{

const resp:Apostador=await (await httpAxios.put<Apostador>(`apostador/update/?apostadorId=${idApostador.value}`,data)).data
console.log(`El Apostador ${resp.Nombre} fue modificado con éxito`);
alert("El Apostador fue modificado con exito")
return;
}
try{
  const resp: Apostador =  await (await httpAxios.post<Apostador>(`apostador/create`, data)).data
  console.log(`El apostador ${resp.Nombre} fue grabado con éxito`);
  alert("El Apostador fue grabado con exito")

}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}

}
})


