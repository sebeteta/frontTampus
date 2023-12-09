import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./Login";
import Navegar from "./Navegar";
import Home from "./Home";
import Publicar from "./Publicar";
import Perfil from "./Perfil";
import Register from "./Register";
import Reservas from "./Reservas";
import { AuthProvider } from "./components/Context";
function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navegar" element={<Navegar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/publicar" element={<Publicar/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
