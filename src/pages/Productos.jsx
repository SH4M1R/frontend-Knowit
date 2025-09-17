import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Productos = () => {
   const productos = [
  { 
    id: 1, 
    nombre: "Lomo Saltado", 
    descripcion: "Clásico plato peruano de carne salteada con cebolla, tomate y papas fritas.", 
    precio: 28.00, 
    categoria: "Plato de Fondo", 
    img: "https://images.pexels.com/photos/28503582/pexels-photo-28503582.jpeg"
  },
  { 
    id: 2, 
    nombre: "Ceviche Clásico", 
    descripcion: "Pesca del día marinada en limón, con cebolla morada, camote y choclo.", 
    precio: 25.00, 
    categoria: "Entrada", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbR3IATt46jQws-6HXvDqSMFoGX9zmUagJGQ&s"
  },
  { 
    id: 3, 
    nombre: "Ají de Gallina", 
    descripcion: "Pollo deshilachado en cremosa salsa de ají amarillo con pan y leche.", 
    precio: 22.00, 
    categoria: "Plato de Fondo", 
    img: "https://buenazo.cronosmedia.glr.pe/original/2023/06/26/6499bf204fb28f54f91a9289.png"
  },
  { 
    id: 4, 
    nombre: "Causa Limeña", 
    descripcion: "Capas de papa amarilla con relleno de pollo y palta.", 
    precio: 18.00, 
    categoria: "Entrada", 
    img: "https://d2j9trpqxd6hrn.cloudfront.net/uploads/recipe/main_image/889/causa_limen%CC%83a.webp"
  },
  { 
    id: 5, 
    nombre: "Anticuchos", 
    descripcion: "Brochetas de corazón de res marinadas y asadas a la parrilla.", 
    precio: 20.00, 
    categoria: "Entrada", 
    img: "https://comidasperuanas.net/wp-content/uploads/2015/06/Anticuchos-de-Coraz%C3%B3n-Peruanos.jpg"
  },
  { 
    id: 6, 
    nombre: "Arroz con Mariscos", 
    descripcion: "Arroz salteado con mariscos frescos, al estilo peruano.", 
    precio: 26.00, 
    categoria: "Plato de Fondo", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzeOl5TUjUNam6xG0ovGbklmiEWNX3q00eQ&s"
  },
  { 
    id: 7, 
    nombre: "Suspiro Limeño", 
    descripcion: "Postre peruano con manjar blanco y merengue al oporto.", 
    precio: 12.00, 
    categoria: "Postre", 
    img: "https://www.recetasnestle.com.pe/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/f9174d14214c9315a3234a3581617e3f.jpg?itok=B5me4xUd"
  },
  { 
    id: 8, 
    nombre: "Mazamorra Morada", 
    descripcion: "Postre tradicional hecho a base de maíz morado, frutas y especias.", 
    precio: 10.00, 
    categoria: "Postre", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jp1tXvsJ5-engpODTozvyAjvyKQpxmmR2A&s"
  },
  { 
    id: 9, 
    nombre: "Chicha Morada", 
    descripcion: "Bebida refrescante hecha con maíz morado, piña y canela.", 
    precio: 8.00, 
    categoria: "Bebida", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6P1bpkgGU-ULZIQg3CwMIPuq9U4fyHAoaBQ&s"
  }
];


  return (
    <>
      <Container className="my-4">
      <h1 className="mb-4">Productos</h1>
        <Row>
          {productos.map((p) => (
            <Col key={p.id} md={4} className="mb-4">
              <ProductCard producto={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Productos

