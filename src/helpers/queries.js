const URI_TAREAS= import.meta.env.VITE_API_TAREAS;

//console.log(URI_TAREAS)

console.log(URI_TAREAS);

export const leerTareasAPI = async()=>{
     try {
        const respuesta = await fetch(URI_TAREAS);
        const listaTareas = await respuesta.json()
        return listaTareas;
     } catch (error) {
        console.log(error)
     }
}

export const crearTareaAPI = async(nuevatarea)=>{
   try {
     const respuesta = await fetch(URI_TAREAS, {
        method: "POST",
        headers: {
           "Content-Type":"application/json"
        },
        body: JSON.stringify(nuevatarea)
     })
     console.log(respuesta);
     return respuesta
   } catch (error) {
     console.log(error)
   }
  }

  export const borrarTareaAPI = async(id)=>{
   try {
     const respuesta = await fetch(`${URI_TAREAS}/${id}`, {
        method: "DELETE",
     })
     console.log(respuesta);
     return respuesta
   } catch (error) {
     console.log(error)
   }
  }

  export const editarTareaAPI = async(id, tarea) => {
   try {
      const respuesta = await fetch(`${URI_TAREAS}/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type":"application/json"
         },
      body: JSON.stringify(tarea)
   })
      console.log(respuesta);
      return respuesta;
   } catch (error) {
      console.log(error)
   }
   }

   
  export const obtenerTareaAPI = async(id)=>{
   try {
      const respuesta = await fetch(`${URI_TAREAS}/${id}`);
     // console.log(respuesta);
     // const productoBuscado = await respuesta.json()
     console.log(respuesta);
      return respuesta;
   } catch (error) {
      console.log(error)
   }
}