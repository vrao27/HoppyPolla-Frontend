import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrewRecipeContextProvider } from "./context/BrewRecipeContext";
import { AuthContextProvider } from "./context/AuthContext";

//pages
import Home from "./pages/Home";
import Brew from "./pages/Brew";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Brewing101 from "./pages/Brewing101";
import CreateBrew from "./pages/CreateBrew";

//components
import Navbar from "./components/Navbar";
import BrewRecipeDetails from "./components/BrewRecipeDetails";
import LoginMessage from "./components/LoginMessage";
//import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  //const { user } = useAuthContext();

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
                <Route path="/brewing101" element={<Brewing101 />} />
                <Route path="/LoginMessage" element={<LoginMessage />}>
                  <Route
                    path="LoginMessage/CreateBrew"
                    element={<CreateBrew />}
                  />
                </Route>
              </Routes>
            </div>
          </BrewRecipeContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
