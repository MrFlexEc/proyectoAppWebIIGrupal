import './style3.css'
import axios from "axios";
import { IResRegistro, Registro} from "./interfaces/IRegistro";
//importaciones de librerias 
//comparticiones de backend mediante puerto 
const httpAxios=axios.create({
  baseURL:"http://localhost:8082/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
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
<label for="id">Id registro</label>  <input id="id" />
<label for="idPacientes">Id Paciente</label>  <input id="idPacientes" />
<label for="idPlatos"> Id Plato</label> <input id="idPlatos">
<label for="fecha">fecha</label> <input id="fecha"/>
<label for="hora">Hora</label> <input id="hora"/>
<label for="numero_de_calorias_consumida">numero de calorias consumida</label> <input id="numero_de_calorias_consumida"/>
<label for="numero_de_Porciones">Numero de porciones </label> <input id="numero_de_Porciones"/>

<button id="nuevo">Borrar</button>
<button id="grabar">Guardar</button>
<button id="consultar">Consultar</button>
</div>



<footer class="footer">
Bienvenido
</footer>

</body>
<div id="cuerpo"> </div>

`
//constantes para ser usada en los metodos de botones 
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id=document.querySelector<HTMLInputElement>("#id")!
const idPacientes=document.querySelector<HTMLInputElement>("#idPacientes")!
const idPlatos=document.querySelector<HTMLInputElement>("#idPlatos")!
const fecha=document.querySelector<HTMLInputElement>("#fecha")!
const hora=document.querySelector<HTMLInputElement>("#hora")!
const numero_de_calorias_consumida=document.querySelector<HTMLInputElement>("#numero_de_calorias_consumida")!
const numero_de_Porciones=document.querySelector<HTMLInputElement>("#numero_de_Porciones")!
const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
nuevo.addEventListener("click", ()=>{
  id.value=""
  idPacientes.value=""
  idPlatos.value=""
  fecha.value=""
  hora.value=""
  numero_de_calorias_consumida.value=""
  numero_de_Porciones.value=""
})
//metodos de consular guardar y vaciar de registros 

consultar.addEventListener("click", async()=>{
  const respRegistros:IResRegistro=await (await httpAxios.get<IResRegistro>("registros")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {registros}=respRegistros;
  console.log(respRegistros)
  
//para mostrar en la tabla.
  for (const registro of registros)
    {
      console.log(registro)
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${registro._id}">${registro.fecha}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${registro._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;

        const registro:Registro=await (await httpAxios.get<Registro>(`registros/${idx}`)).data
        console.log(registro)
        id.value=registro._id!.toString()
        idPacientes.value=registro.id_pacientes.toString()
        idPlatos.value=registro.id_platos.toString()
        fecha.value=registro.fecha!.toString()
        hora.value=registro.hora.toString()
        numero_de_calorias_consumida.value=registro.numero_de_calorias_consumida.toString()
        numero_de_Porciones.value=registro.numero_de_Porciones.toString()
      })
    })
  })
//metodo para guardar 
    grabar.addEventListener('click',async ()=>{
      const data:Registro= {
        _id:id.value.toString(),
        id_pacientes:idPacientes.value.toString(),
        id_platos: idPlatos.value.toString(),
        fecha: fecha.value.toString(),
        hora:hora.value.toString(),
        numero_de_calorias_consumida:numero_de_calorias_consumida.value.toString(),
        numero_de_Porciones:numero_de_Porciones.value.toString()
      }
    
      if (id.value.trim().length>0 )
      {
        // 
               
        const resp: Registro = await (await httpAxios.put<Registro>(`registros/modificar/${id.value}`, data)).data
         
        console.log(`El registro fue modificado con éxito ${resp._id}`);
        
        return;
      }
      try {
        const resp: Registro =  await (await httpAxios.post<Registro>(`registros/crear`, data)).data
       
        console.log(`El registro ${resp._id} fue grabado con éxito`);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
        }
      }
    })