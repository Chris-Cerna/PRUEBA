import React from 'react'
import { useState, useEffect } from 'react';
export const VerificacionTest = () => {

    const [Solicitudes, setSolicitudes] = useState([])

    useEffect(() => {
        fetch('https://62f9a6923c4f110faa8b1b09.mockapi.io/api/Solicitud/')
          .then((response) => {
            return response.json()
          })
          .then((datos) => {
    
            setSolicitudes(  (datos) )
            
            
            
          })
          .catch(error => console.log(error));
      }, [])
       
      
    
  return (
    <div>
        {
            Solicitudes.map ((solicitud) => {
                return(
                    <li key={solicitud.id}>
                        
                        <img style={{
                           width:"50px",
                          height: "50px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "4px solid white"
                          }}
                          src={solicitud.avatar}
                          alt=''/>
                        <p> {solicitud.id}  {solicitud.name} </p>
                        <p> {solicitud.createdAt} </p>
                    </li>
                )
                
            })
        }
    </div>
  )
}
