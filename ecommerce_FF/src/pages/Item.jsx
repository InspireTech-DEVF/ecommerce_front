import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
const defaultImage =
  "https://cosirkenyaorg.files.wordpress.com/2022/06/product-image-placeholder.jpeg";

const Item = () => {
  const { category_id } = useParams();
  const { products, setProducts } = useContext(ProductContext); // Usar el contexto correctamente
const handleImageError = (e) => {
  e.target.src = defaultImage
}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = category_id ? { category_id } : {};
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/items`,
          { params }
        );
        setProducts(Array.isArray(response.data) ? response.data : []); // Asegurarse de que la respuesta sea un array
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // En caso de error, setear products a un array vacío
      }
    };

    fetchProducts();
  }, [category_id, setProducts]);

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product._id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image || defaultImage}
                alt={product.name}
                className="img-fluid"
                style={{ height: "200px", objectFit: "contain" }}
                onError={handleImageError}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {product.description}
                </Card.Text>
                <Card.Text className="fw-bold">${product.price}</Card.Text>
                <Link to={`/items/${product._id}`} className="btn btn-secondary mt-2">
                  Ver detalle
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Item;