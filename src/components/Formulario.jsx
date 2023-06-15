import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Formulario = () => {
    const [categoria, setCategoria] = useState("")
    const [noticias, setNoticias] = useState([])


    return (
        <>
            
      <Form className="row">
        <Form.Group className="mb-3 d-flex flex-column" controlId="tarea">
        <Form.Label>Ingrese una categoria de noticias:</Form.Label>
          <Form.Select>
            <option>Elige que tipo de noticia te interesa</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="world">Globales</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>
          <Container className="my-3 text-center">
            <Button
              variant="warning"
              type="submit"
            //   onClick={() => setCategoriaSeleccionada(categoria)}
            >
              Buscar
            </Button>
          </Container>
        </Form.Group>
      </Form>
      <Container className="row">
        {/* {mostrarNoticias && <ListaNoticias noticias={noticias.results} />} */}
      </Container>
        </>
    );
};

export default Formulario;