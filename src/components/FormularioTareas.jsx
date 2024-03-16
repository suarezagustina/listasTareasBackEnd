import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearTareaAPI, editarTareaAPI, obtenerTareaAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const FormularioTareas = ({editar, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();
  
  const{id} = useParams();

  const navegacion = useNavigate();

  useEffect(()=>{
    if(editar){
    cargarDatosFormulario();
    }
  },[]);

  const cargarDatosFormulario = async ()=>{
    const respuesta = await obtenerTareaAPI(id);
    if(respuesta.status === 200){
      const tareaBuscada = await respuesta.json();
      setValue("nombreTarea", tareaBuscada.nombreTarea)
      setValue("subtituloTarea", tareaBuscada.subtituloTarea)
      setValue("descripcionTarea", tareaBuscada.descripcionTarea)
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text:  "Intente realizar esta operacion en unos minutos",
        icon: "error"
      });
    }
  }
  
  const tareaForm = async(tarea) => {
    if(editar){
      const respuesta = await editarTareaAPI(id, tarea)
      if(respuesta.status === 200){
        Swal.fire({
          title: "Tarea editada!",
          text:  `La Tarea: ${tarea.nombreTarea} fue editada correctamente `,
          icon: "success"
        });
        //redireccionar
        navegacion("/modificartarea");
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intente editar este producto en unos minutos",
          icon: "error"
        });
      }
    }else{
   // console.log(producto);
    const respuesta = await crearTareaAPI(tarea);
    if(respuesta.status === 201){
      //mensaje
      Swal.fire({
        title: "Tarea creada!",
        text:  `La Tarea: ${tarea.nombreTarea} fue creada correctamente `,
        icon: "success"
      });
    //  console.log("producto creado")
    reset();
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente crear este producto en unos minutos",
        icon: "error"
      });
    }
  };
}

  return (
    <Container className="mainPage">
      <section className="text-center">
        <h2 className="display-5 my-3 text-white">{titulo}</h2>
        <h3 className="display-6 text-white">Tarea:</h3>
        <Form onSubmit={handleSubmit(tareaForm)}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Titulo de tarea..."
          
            {...register("nombreTarea", {
              required: "El nombre de la tarea es obligatorio",
              minLength: {
                value: 5,
                message:
                  "Ingresar como minimo 5 caracteres para el Titulo de la Tarea",
              },
              maxLength: {
                value: 150,
                message: "Puedes ingresar como maximo 150 caracteres para el Titulo de la Tarea",
              },
            })}

          />
          <p className="text-danger mb-0">
          {errors.nombreTarea?.message}
            </p>
          <br />

          <Form.Control size="sm" type="text" placeholder="Subtitulo" 
          
          {...register("subtituloTarea", {
            required: "Un subtitulo para la tarea es obligatorio",
            minLength: {
              value: 2,
              message:
                "Ingresar como minimo 2 caracteres para el Subtitulo de la Tarea",
            },
            maxLength: {
              value: 100,
              message: "Puedes ingresar como maximo 100 caracteres para el Subtitulo de la Tarea",
            },
          })}

          />
          <p className="text-danger mb-0">
          {errors.subtituloTarea?.message}
          </p>

          <br />
          <Form.Control type="text" placeholder="Descripcion Breve" 
          
          {...register("descripcionTarea", {
            minLength: {
              value: 8,
              message:
                "Ingresar como minimo 8 caracteres para una descripcion breve de la Tarea",
            },
            maxLength: {
              value: 250,
              message: "Puedes ingresar como maximo 250 caracteres para una breve descripcion de la Tarea",
            },
          })}

          />
          <p className="text-danger mb-0">
          {errors.descripcionTarea?.message}
          </p>
          <Button variant="light" className="my-3 btn btn-light" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default FormularioTareas;
