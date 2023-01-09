import './style2.css'
import axios from 'axios'
import {IRPaciente, Paciente} from "./interfaces/IPaciente"
//librerias importadas 
//puerto a usr para backend 
const httpAxios=axios.create({
    baseURL:"http://localhost:3000/"
})

const app=document.querySelector<HTMLDivElement>("#app")!
//creacion del index 
app.innerHTML=`


<nav class="nav">
  <ul class="lista">
    <li class="item"><a class="enlace" href="./index.html">Platos</a></li>
    <li class="item"><a class="enlace" href="./paciente.html">Pacientes</a></li>
    <li class="item"><a class="enlace" href="./registro.html">Registro</a></li>
  </ul>
</nav>
<div class="container">


<label for="idPaciente">Identificador</label> <input type="text" id="idPaciente">
<label for="nombrePaciente">Nombre</label> <input type="text" id="nombrePaciente">
<label for="identificacionPaciente">identificacion</label> <input type="text" id="identificacionPaciente">
<label for="edadPaciente">edad</label> <input type="text" id="edadPaciente">
<label for="alturaPaciente">altura</label> <input type="text" id="alturaPaciente">

<button id="limpiarPaciente">Limpiar</button>
<button id="crearPaciente">Grabar</button>
<button id="consultarPaciente">Consultar</button>
</div>
<div id="cuerpo"> </div>

<footer class="footer">
bienvenido
 </footer>
`
//constante para ser usadas en los metodos botoenes 
const limpiarPaciente=document.querySelector<HTMLInputElement>("#limpiarPaciente")!
const crearPaciente=document.querySelector<HTMLInputElement>("#crearPaciente")!
const consultarPaciente=document.querySelector<HTMLInputElement>("#consultarPaciente")!


const idPaciente=document.querySelector<HTMLInputElement>("#idPacinte")!
const nombrePaciente=document.querySelector<HTMLInputElement>("#nombrePaciente")!
const identificacionPaciente=document.querySelector<HTMLInputElement>("#identificacionPaciente")!
const edadPaciente=document.querySelector<HTMLInputElement>("#edadPaciente")!
const alturaPaciente=document.querySelector<HTMLInputElement>("#alturaPaciente")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

//creacion del medodo para limpiar pacientes
limpiarPaciente.addEventListener("click",()=>{
    idPaciente.value=""
    nombrePaciente.value=""
    identificacionPaciente.value=""
    edadPaciente.value=""
    alturaPaciente.value=""
  })

//creacion del metodo para consultar pacientes

  consultarPaciente.addEventListener("click", async()=>{
    const resPaciente:IRPaciente=await (await httpAxios.get<IRPaciente>("paciente")).data
    
    const tabla=document.createElement("table")
    tabla.id="tablaPacientes"
    tabla.border="1"
    
    const {pacientes}=resPaciente
    console.log(pacientes)

    for(const paciente of pacientes){
        const row =tabla.insertRow()
        const celda=row.insertCell()
        celda.innerHTML=`Nombre: <button class="boton" value="${paciente._id}">${paciente.nombre}</button>`
      }


      cuerpo.innerHTML=``
      cuerpo.appendChild(tabla)
  //mostrar en cuadro
      document.querySelectorAll(".boton").forEach((ele:Element)=>{
        ele.addEventListener("click", async()=>{
          const idx=(ele as HTMLButtonElement).value
          const paciente:Paciente=await (await httpAxios.get<Paciente>(`paciente/${idx}`)).data
          idPaciente.value=paciente._id!
          nombrePaciente.value=paciente.nombre
          identificacionPaciente.value=paciente.identificacion
          edadPaciente.value=paciente.edad
          alturaPaciente.value=paciente.altura
        
        })
      })
    })
//metodo para crear paciente 
crearPaciente.addEventListener("click",async()=>{
const data:Paciente={
  nombre:nombrePaciente.value,
  identificacion:identificacionPaciente.value,
  edad:edadPaciente.value,
  altura:alturaPaciente.value
}
        
if(idPaciente.value.trim().length>0)
{
        
const resp:Paciente=await (await httpAxios.put<Paciente>(`paciente/update/?pacienteId=${idPaciente.value}`,data)).data
console.log(`El paciente ${resp.nombre}  fue modificado con éxito`);
alert("El paciente fue modificado con exito")
return;
}
try{
  const resp: Paciente =  await (await httpAxios.post<Paciente>(`paciente/create`, data)).data
  console.log(`El paciente ${resp.nombre} fue grabado con éxito`);
  alert("El paciente fue grabado con exito")
        
}catch(error){
  if ( axios.isAxiosError(error)  )
    {
      console.log(error );
}
        
}
})
        
    

    