import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

function NavbarCategory({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    console.log('Category selected:', categoryId); // Verifica que se está seleccionando una categoría
    onCategorySelect(categoryId);
    navigate(`/items/${categoryId}`);
  };

  return (
    <Nav fill variant='tabs' defaultActiveKey='/home' className="mt-5 flex-nowrap overflow-auto">
      {categories.map((category) => (
        <Nav.Item key={category._id}>
          <Nav.Link 
            eventKey={category._id} 
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default NavbarCategory;
