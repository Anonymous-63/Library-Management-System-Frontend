import { Navigate, Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../features/auth/pages/Login"
import DashboardLayout from "../layouts/DashboardLayout"
import { useSelector } from "react-redux"
import DashboardLanding from "../layouts/DashboardLanding"

export function RequireAuth({ children, allowedRoles, allowedPrivileges }) {
    const token = useSelector(s => s.auth.accessToken);
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);

    if (!token) return <Navigate to="/login" replace />;

    // Role-based check
    if (allowedRoles && !user?.roles?.some(r => allowedRoles.includes(r))) {
        return <Navigate to="/dashboard" replace />;
    }

    // Privilege-based check
    if (allowedPrivileges && !privileges?.some(p => allowedPrivileges.includes(p))) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />

            <Route path="/dashboard/*" element={<RequireAuth><DashboardLayout /></RequireAuth>}>
                <Route index element={<DashboardLanding />} />
            </Route>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    )
}