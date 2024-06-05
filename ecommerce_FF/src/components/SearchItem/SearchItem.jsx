import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { ProductContext } from "../../context/SearchContext";

const SearchItem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = searchTerm ? { search: searchTerm } : {};
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

    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
    }, 300); // Retraso de 300ms para evitar solicitudes excesivas

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, setProducts]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="me-auto align-items-center w-100">
      <Form className="d-flex me-2 flex-grow-1">
        <Form.Control
          type="search"
          placeholder="Introduce un artículo"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form>
    </div>
  );
};

export default SearchItem;
