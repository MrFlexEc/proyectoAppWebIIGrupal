import './style3.css'
import axios from "axios";
import {IPronostico, Pronostico} from "./interfaces/IPronostico";


const httpAxios=axios.create({
  baseURL:"http://localhost:3000/"
})

const app=document.querySelector<HTMLDivElement>('#app')!
 
/*
const etiqueta=document.createElement("label")
etiqueta.textContent="identificador"
const input=document.createElement("input")
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta)
app.appendChild(input)
*/
//<label for="fecha">Fecha </label> <input id="fecha"/>
//<label for="id">Id aprendizaje</label>  <input id="id" />
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
<label for="id">Id </label>  <input id="id" />
<label for="idApostador">Id Apostador</label>  <input id="Id Apostador" />
<label for="idEncuentroDeportivo"> Id Encuentro Deportivo</label> <input id="idEncuentroDeportivo">
<label for="ResultadoPropuesto">Fecha</label> <input id="fecha"/>
<label for="ValorApuesta">Valor apuesta</label> <input id="valorapuesta"/>
<label for="Ganancia">Ganancia</label> <input id="ganancia"/>


<button id="nuevo">Nuevo</button>
<button id="grabar">Grabar</button>
<button id="consultar">Consultar</button>
</div>


</body>
<div id="cuerpo"> </div>

`
const nuevo=document.querySelector<HTMLButtonElement>("#nuevo")!
const grabar=document.querySelector<HTMLButtonElement>("#grabar")!
const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

const id=document.querySelector<HTMLInputElement>("#id")!
const idApostador=document.querySelector<HTMLInputElement>("#idApostador")!
const idEncuentroDeportivo=document.querySelector<HTMLInputElement>("#idEncuentroDeportivo")!
const ResultadoPropuesto=document.querySelector<HTMLInputElement>("#ResultadoPropuesto")!
const ValorApuesta=document.querySelector<HTMLInputElement>("#valorapuesta")!
const Ganancia=document.querySelector<HTMLInputElement>("#ganancia")!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!
nuevo.addEventListener("click", ()=>{
  id.value=""
  idApostador.value=""
  idEncuentroDeportivo.value=""
  ResultadoPropuesto.value=""
  ValorApuesta.value=""
  Ganancia.value=""
})


consultar.addEventListener("click", async()=>{
  const respPronosticos:IResPronostico=await (await httpAxios.get<IResPronostico>("Pronostico")).data
  const tabla = document.createElement("table")
  tabla.id="tabla"
  tabla.border="1"

  const {pronosticos}=respPronosticos;
  console.log(respPronosticos)
  

  for (const pronostico of pronosticos)
    {
      console.log(pronosticos)
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${pronostico._id}">${pronostico.fecha}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${pronostico._id}`
    }
    cuerpo.innerHTML=``
    cuerpo.appendChild(tabla)


    document.querySelectorAll(".boton").forEach((ele:Element)=>{
      ele.addEventListener("click", async()=>{
        const idx=(ele as HTMLButtonElement).value;

        const pronostico:Pronostico=await (await httpAxios.get<Pronostico>(`pronostico/${idx}`)).data
        console.log(pronostico)
        id.value=pronostico._id!.toString()
        idApostador.value=pronostico.idApostador.toString()
        idEncuentroDeportivo.value=pronostico.idEncuentroDeportivo.toString()
        ResultadoPropuesto.value=pronostico.ResultadoPropuesto!.toString()
        ValorApuesta.value=pronostico.ValorApuesta.toString()
        Ganancia.value=pronostico.Ganancia.toString()
      })
    })
  })

    grabar.addEventListener('click',async ()=>{
      const data:Pronostico= {
        _id:id.value.toString(),
        idApostador:idApostador.value.toString(),
        idEncuentroDeportivo: idEncuentroDeportivo.value.toString(),
        ResultadoPropuesto: ResultadoPropuesto.value.toString(),
        ValorApuesta:ValorApuesta.value.toString(),
        Gnancia:Ganancia.value.toString(),
      }
    
      if (id.value.trim().length>0 )
      {
        //        
        const resp: Pronostico = await (await httpAxios.put<Pronostico>(`pronostico/?pronosticoId=${id.value}`, data)).data
       // {acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1} esto regresa
        
        console.log(`El pronostico fue modificado con éxito`);
        
        return;
      }
      try {
        const resp: Pronostico =  await (await httpAxios.post<Pronostico>(`pronostico/create`, data)).data
       
        console.log(`El pronostico ${resp._id} fue grabado con éxito`);
      } catch (error) {
        if ( axios.isAxiosError(error)  )
        {
          console.log(error );
        }
      }
    })