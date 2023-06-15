import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  useEffect(() => {
    // consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_24226bea9b87e0d87603664a9762b89a71aa4&category=${categoria}`
      );
      const dato = await respuesta.json();
      console.log(respuesta);
      // console.log(respuesta.ok);
      console.log(dato);
      setNoticias(dato);
      setMostrarNoticias(true);
      console.log(noticias);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(e.target.value);
    // setPais(e.target.value);
    console.log(categoria);
    // console.log(ciudad);
    consultarAPI();
  };

  return (
    <><Container className="text-center">

   
      <Form className="row" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="tarea">
          <Form.Label>Ingrese una categoria de noticias:</Form.Label>
          <Form.Select
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
          >
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
            >
              Buscar
            </Button>
          </Container>
        </Form.Group>
      </Form>
      </Container>
      <Container className="row">
        {/* {mostrarNoticias && <ListaNoticias noticias={noticias.results} />} */}
      </Container>
    </>
  );
};

export default Formulario;
