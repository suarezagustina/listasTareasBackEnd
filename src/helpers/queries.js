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