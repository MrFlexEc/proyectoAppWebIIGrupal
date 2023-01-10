import './style2.css'
import axios from 'axios'
import {IRCancha, Cancha} from "./interfaces/ICancha"


const httpAxios=axios.create({
    baseURL:"http://localhost:8082/"
})

const app=document.querySelector<HTMLDivElement>("#app")!

app.innerHTML=`


<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Deportista</a></li>
    <li class="item"><a class="enlace" href="./cancha.html">Canchas</a></li>
    <li class="item"><a class="enlace" href="./resrvacion.html">Reservacion</a></li>
  </ul>
</nav>
<div class="container">


<label for="idCancha">Identificador</label> <input type="text" id="idCancha">
<label for="Cancha">Nombre</label> <input type="text" id="Cancha">
<label for="descripcion">Cedula</label> <input type="text" id="descripcion">

<button id="eliminarCancha">Eliminar</button>
<button id="crearCancha">Guardar</button>
<button id="consultarCancha">Consultar</button>
</div>
<div id="cuerpo"> </div>

`
const eliminarCancha=document.querySelector<HTMLInputElement>("#eliminarCancha")!
const crearCancha=document.querySelector<HTMLInputElement>("#crearCancha")!
const consultarCancha=document.querySelector<HTMLInputElement>("#consultarCancha")!


const idCancha=document.querySelector<HTMLInputElement>("#idCancha")!
const descripcion=document.querySelector<HTMLInputElement>("#descripcion")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!


eliminarCancha.addEventListener("click",()=>{
    idCancha.value=""
    descripcion.value=""
  })


  consultarCancha.addEventListener("click", async()=>{
    const resCancha:IRCancha=await (await httpAxios.get<IRCancha>("cancha")).data
    
    
    const tabla=document.createElement("table")
    tabla.id="tablaCanchas"
    tabla.border="1"
    
    const {canchas}=resCancha
    console.log(canchas)

    for(const cancha of canchas){
        const row =tabla.insertRow()
        const celda=row.insertCell()
        celda.innerHTML=`Nombre: <button class="boton" value="${cancha._id}">${cancha.descripcion}</button>`
      }


      cuerpo.innerHTML=``
      cuerpo.appendChild(tabla)
  
      document.querySelectorAll(".boton").forEach((ele:Element)=>{
        ele.addEventListener("click", async()=>{
          const idx=(ele as HTMLButtonElement).value
          const cancha:Cancha=await (await httpAxios.get<Cancha>(`cancha/${idx}`)).data
         //yo estaba haciendo  idIdioma.value!=idioma._id eso es incorrecto
          idCancha.value=cancha._id!
          descripcion.value=cancha.descripcion
        
        })
      })
    })

crearCancha.addEventListener("click",async()=>{
const data:Cancha={
  descripcion:descripcion.value,
}
        
if(idCancha.value.trim().length>0)
{
        
const resp:Cancha=await (await httpAxios.put<Cancha>(`cancha/update/?canchaId=${idCancha.value}`,data)).data
console.log(`El cancha ${resp.descripcion}  fue modificado con éxito`);
alert("El cancha fue modificado con exito")
return;
}
try{
  const resp: Cancha =  await (await httpAxios.post<Cancha>(`cancha/create`, data)).data
  console.log(`El cancha ${resp.descripcion} fue grabado con éxito`);
  alert("El cancha fue grabado con exito")
        
}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}
        
}
})
        
    

    