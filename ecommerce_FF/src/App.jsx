import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Item from "./pages/Item.jsx";
import ProductProvider from "./context/SearchContext.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    console.log("Category selected in App:", categoryId); // Verifica que la categoría seleccionada se está pasando
    setSelectedCategory(categoryId);
  };

  return (
    <ProductProvider>
      <Router>
        <div>
          <Header onCategorySelect={handleCategorySelect} />
          <Routes>
            <Route path="/items/:category_id" element={<Item />} />
            <Route path="/" element={<Item />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
