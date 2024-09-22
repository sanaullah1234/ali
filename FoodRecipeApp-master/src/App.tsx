import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import("./pages/Home"));
const RecipeDetails = React.lazy(() => import("./pages/RecipeDetails"));

function App() {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Router>
        
        <Suspense fallback={<div className="flex justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
