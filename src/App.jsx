import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageWrapper from "./components/kayoze/PageWrapper";
import Contact from "./pages/Contact";
import Fabrics from "./pages/Fabrics";
import Products from "./pages/Products";
import BookCon from "./pages/BookCon";
import ServiceDetails from "./pages/ServiceDetails";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./components/kayoze/ProductList";
import FabricList from "./components/kayoze/FabricList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route path="/" element={<Home />} />

          {/* Products Route with Nested Routes */}
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path=":category" element={<ProductList />} />
          </Route>

          {/* Fabrics Route with Nested Routes */}
          <Route path="/fabrics" element={<Fabrics />}>
            <Route index element={<FabricList />} />
            <Route path=":category" element={<FabricList />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/bookconcultation" element={<BookCon />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
