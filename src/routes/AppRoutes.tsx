import { Routes, Route } from "react-router-dom";
import { Login } from "../views/Login/Login";
import { Signup } from "../views/Signup/Signup";
import Dashboard from "../views/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="*" element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
    )
};

export default AppRoutes;