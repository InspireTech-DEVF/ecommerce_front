import { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Item from "./pages/Item.jsx";
import ProductProvider from "./context/SearchContext.jsx";
import RoutesIndex from "./routes/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    console.log("Category selected in App:", categoryId); // Verifica que la categoría seleccionada se está pasando
    setSelectedCategory(categoryId);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <div>
              <Header onCategorySelect={handleCategorySelect} />
              <RoutesIndex />
              <Routes>
                <Route path="/items/:category_id" element={<Item />} />
                <Route path="/" element={<Item />} />
              </Routes>
            </div>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
