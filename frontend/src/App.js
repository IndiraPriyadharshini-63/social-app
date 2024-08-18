import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Chat from "./pages/chat/Chat";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
