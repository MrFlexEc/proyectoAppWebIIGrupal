import './style.css'
import axios from 'axios'

import {IRPlato, Plato} from "./interfaces/IPlato"
//para ser compartir puerto y ser usado el backend y front
const httpAxios=axios.create({
  baseURL:"http://localhost:8082/"
})

//ts. de platos 
const app=document.querySelector<HTMLDivElement>("#app")!
//creacion del index 

app.innerHTML+=`
<body>
<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Platos</a></li>
    <li class="item"><a class="enlace" href="./paciente.html">Pacientes</a></li>
    <li class="item"><a class="enlace" href="./registro.html">Registros</a></li>
  </ul>
</nav>



<div class="container">



<label for="id">Id_plato</label> <input type="text" id="idPlato">
<label for="nombreplato">Nombre Plato</label> <input type="text" id="nombreplato">
 


<button id="limpiarPlato">Borrar</button>
<button id="crearPlato">Guardar</button>
<button id="consultarPlato">Consultar</button>



</div>

<div id="cuerpo"></div>


<footer class="footer">
creado por Alex Polanco 
</footer>

</body>
`
//constantes para ser usado en los metodos de los botones 
const limpiarPlato=document.querySelector<HTMLInputElement>("#limpiarPlato")!
const crearPlato=document.querySelector<HTMLInputElement>("#crearPlato")!
const consultarPlato=document.querySelector<HTMLInputElement>("#consultarPlato")!


const idPlato=document.querySelector<HTMLInputElement>("#idPlato")!
const nombreplato=document.querySelector<HTMLInputElement>("#nombreplato")!
 
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
//metodo para limpiar
limpiarPlato.addEventListener("click",()=>{
  idPlato.value=""
  nombreplato.value=""
   
})

//consultar plato metodo 
consultarPlato.addEventListener("click", async()=>{
const resPlatos:IRPlato=await (await httpAxios.get<IRPlato>("platos")).data


const tabla=document.createElement("table")
tabla.id="tablaPlatos"
tabla.border="1"

const {platos}=resPlatos
console.log(platos)

for(const plato of platos){
  const row =tabla.insertRow()
  const celda=row.insertCell()
  celda.innerHTML=`Descripcion: <button class="boton" value="${plato._id}">${plato.nombreplato}</button>`
}

cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)

    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value
        const plato:Plato=await (await httpAxios.get<Plato>(`platos/${idx}`)).data
       //yo estaba haciendo  idIdioma.value!=idioma._id eso es incorrecto
        idPlato.value=plato._id!
        nombreplato.value=plato.nombreplato
         
      })
    })
  })
//creacion de plato 
crearPlato.addEventListener("click",async()=>{
const data:Plato={
  nombreplato:nombreplato.value,
   
}

if(idPlato.value.trim().length>0)
{
//ruta
const resp:Plato=await (await httpAxios.put<Plato>(`platos/modificar/${idPlato.value}`,data)).data
console.log(`El plato ${resp.nombreplato} fue modificado con éxito`);
alert("El plato fue modificado con exito")
return;
}
try{
  const resp: Plato =  await (await httpAxios.post<Plato>(`platos/crear`, data)).data
  console.log(`El plato ${resp.nombreplato} fue grabado con éxito`);
  alert("El plato fue grabado con exito")


}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}

}
})


