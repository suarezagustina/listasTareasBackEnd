import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
//import Swal from "sweetalert2";

const FormularioTareas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const tareaForm = async(producto) => {
    if(editar){
      //agregar logica de editar con la api
      const respuesta = await editarProductoAPI(id, producto)
      if(respuesta.status === 200){
        Swal.fire({
          title: "Producto editado!",
          text:  `El producto: ${producto.nombreDelProducto} fue editado correctamente `,
          icon: "success"
        });
        //redireccionar
        navegacion("/administrador");
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intente editar este producto en unos minutos",
          icon: "error"
        });
      }
    }else{
   // console.log(producto);
    const respuesta = await crearProductoAPI(producto);
    if(respuesta.status === 201){
      //mensaje
      Swal.fire({
        title: "Producto creado!",
        text:  `El producto: ${producto.nombreDelProducto} fue creado correctamente `,
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
        <h2 className="display-5 my-3 text-white">Agregar una Tarea:</h2>
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
