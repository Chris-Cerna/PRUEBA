
import "../verificacion Detail/verificacion.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, useEffect } from "react";

export const VerificacionDetail = () => {
  const [infoApi, setInfoApi] = useState([])
  const [message, setMessage] = useState("")
  const [PutMessage, setPutMessage] = useState("")
  

  useEffect(() => {
    fetch(`https://62f9a6923c4f110faa8b1b09.mockapi.io/api/Solicitud/20/verificacion/20`)
      .then((response) => {
        return response.json()
      })
      .then((datos) => {

        setInfoApi( (Array) (datos))
        console.log(datos)
        
        
      })
      .catch(error => console.log(error));
  }, [])

const SendMensaje = async () =>{
   const response = await fetch('https://62f9a6923c4f110faa8b1b09.mockapi.io/api/Solicitud/20/verificacion/20/', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  body: JSON.stringify({
    
    createdAt: "2022-08-14T17:21:01.059Z",
    name: "Edmund McDermott",
    profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/165.jpg",
    Identificacion: 1660530778880,
    imagenes: [],
    mensaje: "mensaje 20",
    Aceptado: true,
    id: "20",
    SolicitudId: "20"
  })
  
           }
           
})
.then(res => res.json())
.then(data =>  console.log(data) )
console.log(response)
}
  
  
  
const handleText = (event) =>{
  
  setMessage(event.target.value)
  
}

const handleSubmit = () => {
  SendMensaje()
}





  return (
    <div className='container'>
      <h1>Verificacion</h1>


      <div>
      
          {infoApi.map( (dataUser)  => {
            return (
              
              <div key={dataUser.id}>
                
                
                <div className='infoProfile'>
                  <img style={{
                           width:"200px",
                          height: "200px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "4px solid white"
                          }}
                          src={dataUser.profile}
                          alt=''/>

          <h1> {dataUser.name}</h1> 
          <h2>DPI: {dataUser.Identificacion} </h2>
        </div>
              </div>
            );
          })}
        
     
    </div>
 
    <div className='container-carousel'>
        <Carousel>
            <div className='image'>
                <img src="https://drive.google.com/uc?export=view&id=1pFMtu5IXCq47zPFY0Vm9-8oDD31PJscA" alt='' ></img>
                <p>Pose 1</p>
            </div>
            <div className='image'>
                <img src="https://drive.google.com/uc?export=view&id=1V2NWN-R7LkwRCloyijjbUnS50O2HyIn3" alt='' ></img>
                <p>Selfie 1</p>
            </div>
            <div className='image'>
                <img src="https://drive.google.com/uc?export=view&id=1MElZwUmSfTr_enwnZAnlsDgMIQj6L_b3" alt='' ></img>
                <p>Pose 2</p>
            </div>
            <div className='imagePadd'>
                <img src="https://drive.google.com/uc?export=view&id=1Zk6y56FDQRibih_09hCwicBPNPpZIvJo" alt='' ></img>
                <p>Selfie 2</p>
            </div>

        </Carousel>
    </div>
      &nbsp;
      
      <TextareaAutosize
      type="text"
      onChange={handleText}
        minRows={10}
        aria-label="empty textarea"
        placeholder="Deja Un Mensaje Al Conductor (Opcional)"
        style={{ width: 600 }}
      />
      &nbsp;

      <div className='botones'>
        
        <Button variant="contained" color="success" onClick={handleSubmit}>
        Aceptar Solicitud<CheckCircleIcon/>
      </ Button>

      &nbsp;

      <Button variant="contained" color="error" >
        Denegar Solicitud<HighlightOffIcon/>
      </Button>
      </div>

      &nbsp;
      &nbsp;
      
    </div>
  )
}
