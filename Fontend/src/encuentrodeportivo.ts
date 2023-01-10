import './style2.css'
import axios from 'axios'
import {IEncuentroDeportivo, EncuentroDeportivo} from "./interfaces/IEncuentroDeportivo"


const httpAxios=axios.create({
    baseURL:"http://localhost:3000/"
})

const app=document.querySelector<HTMLDivElement>("#app")!

app.innerHTML=`


<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Apostador</a></li>
    <li class="item"><a class="enlace" href="./encuentrodeportivo.html">Encuentro Deportivo</a></li>
    <li class="item"><a class="enlace" href="./pronostico.html">Pronóstico</a></li>
  </ul>
</nav>
<div class="container">


<label for="idEncuentroDeportivo">Identificador</label> <input type="text" id="idEncuentroDeportivo">
<label for="Equipo1">Equipo1</label> <input type="text" id="Equipo1">
<label for="Equipo2">Equipo2</label> <input type="text" id="Equipo2">
<label for="Fecha">Fecha</label> <input type="text" id="Fecha">
<label for="Hora">Hora</label> <input type="text" id="Hora">

<button id="limpiarEncuentroDeportivo">Limpiar</button>
<button id="crearEncuentroDeportivo">Grabar</button>
<button id="consultarEncuentroDeportivo">consultar</button>
</div>
<div id="cuerpo"> </div>

`
const limpiarEncuentroDeportivo=document.querySelector<HTMLInputElement>("#limpiarEncuentroDeportivo")!
const crearEncuentroDeportivo=document.querySelector<HTMLInputElement>("#crearEncuentroDeportivo")!
const consultarEncuentroDeportivo=document.querySelector<HTMLInputElement>("#consultarEncuentroDeportivo")!


const idEncuentroDeportivo=document.querySelector<HTMLInputElement>("#idEncuentroDeportivo")!
const Equipo1=document.querySelector<HTMLInputElement>("#Equipo1")!
const Equipo2=document.querySelector<HTMLInputElement>("#Equipo2")!
const Fecha=document.querySelector<HTMLInputElement>("#Fecha")!
const Hora=document.querySelector<HTMLInputElement>("#Hora")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!


limpiarEncuentroDeportivo.addEventListener("click",()=>{
    idEncuentroDeportivo.value=""
    Equipo1.value=""
    Equipo2.value=""
    Fecha.value=""
    Hora.value=""
  })


  consultarEncuentroDeportivo.addEventListener("click", async()=>{
    const resEncuentroDeportivo:IEncuentroDeportivo=await (await httpAxios.get<IEncuentroDeportivo>("encuentrodeportivo")).data
    
    
    const tabla=document.createElement("table")
    tabla.id="tablaEncuentrosDeportivos"
    tabla.border="1"
    
    const {EncuentrosDeportivos}=resEncuentroDeportivo
    console.log(EncuentrosDeportivos)

    for(const encuentrodeportivo of EncuentrosDeportivos){
        const row =tabla.insertRow()
        const celda=row.insertCell()
        celda.innerHTML=`Nombre: <button class="boton" value="${encuentrodeportivo._id}">${encuentrodeportivo.Equipo1}</button>`
      }


      cuerpo.innerHTML=``
      cuerpo.appendChild(tabla)
  
      document.querySelectorAll(".boton").forEach((ele:Element)=>{
        ele.addEventListener("click", async()=>{
          const idx=(ele as HTMLButtonElement).value
          const encuentrodeportivo:EncuentroDeportivo=await (await httpAxios.get<EncuentroDeportivo>(`encuentrodeportivo/${idx}`)).data
         
          idEncuentroDeportivo.value=resEncuentroDeportivo._id!
          Equipo1.value=resEncuentroDeportivo.Equipo1
          Equipo2.value=resEncuentroDeportivo.Equipo2
          Fecha.value=resEncuentroDeportivo.Fecha
          Hora.value=resEncuentroDeportivo.Hora
        
        })
      })
    })

crearEncuentroDeportivo.addEventListener("click",async()=>{
const data:EncuentroDeportivo={
  Equipo1:Equipo1.value,
  Equipo2:Equipo2.value,
  Fecha:Fecha.value,
  Hora:Hora.value
}
        
if(idEncuentroDeportivo.value.trim().length>0)
{
       
const resp:EncuentroDeportivo=await (await httpAxios.put<EncuentroDeportivo>(`encuentrodeportivo/update/?encuentrodeportivoId=${idEncuentroDeportivo.value}`,data)).data
console.log(`El encuentro deportivo ${resp.Equipo1}  fue modificado con éxito`);
alert("El encuentro deportivo fue modificado con exito")
return;
}
try{
  const resp: EncuentroDeportivo =  await (await httpAxios.post<EncuentroDeportivo>(`encuentrodeportivo/create`, data)).data
  console.log(`El encuentro deportivo ${resp.Equipo1} fue grabado con éxito`);
  alert("El encuentro deportivo fue grabado con exito")
        
}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}
        
}
})
        
    

    