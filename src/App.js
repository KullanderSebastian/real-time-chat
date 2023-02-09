import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Chat />} path="/" exact/>
                <Route element={<Profile />} path="/profile" exact/>
            </Route>
            <Route element={<LoginForm/>} path="/login"/>
            <Route element={<RegisterForm/>} path="/register"/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
