import { Routes, Route } from "react-router-dom";
import { Login } from "../views/Login/Login";
import { Signup } from "../views/Signup/Signup";
import Dashboard from "../views/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
};

export default AppRoutes;