import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";
import Chat from "./components/Chat";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Chat />,
    },
    {
        path: "login",
        element: <LoginForm />,
    },
    {
        path: "register",
        element: <RegisterForm />,
    },
    {
        path: "profile",
        element: <Profile />
    },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
