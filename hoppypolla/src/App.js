import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrewRecipeContextProvider } from "./context/BrewRecipeContext";
import { AuthContextProvider } from "./context/AuthContext";

//pages
import Home from "./pages/Home";
import Brew from "./pages/Brew";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//components
import Navbar from "./components/Navbar";
import BrewRecipeDetails from "./components/BrewRecipeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <BrewRecipeContextProvider>
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brew" element={<Brew />} />
                <Route path="/brew/:id" element={<BrewRecipeDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </BrewRecipeContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// //pages
// import Home from './pages/Home'
// import Brew from './pages/Brew'

// //components
// import Navbar from "./components/Navbar";
// import BrewRecipeDetails from "./components/BrewRecipeDetails";
// import BrewRecipesMap from "./components/BrewRecipesMap";

// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      <Navbar />
//      <div className="pages">
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/brew" element={<Brew />} />
//         <Route path='/brew/:id' element={<BrewRecipeDetails />} />
//       </Routes>
//      </div>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;
