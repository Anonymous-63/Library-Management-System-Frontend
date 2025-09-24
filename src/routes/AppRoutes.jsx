import { Navigate, Route, Routes } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../features/auth/pages/Login"
import DashboardLayout from "../layouts/DashboardLayout"
import UsersPage from "../features/users/pages/UsersPage"
import { useSelector } from "react-redux"

export function RequireAuth({ children, allowedRoles }) {
    const token = useSelector(s => s.auth.accessToken)
    const user = useSelector(s => s.auth.user)

    if (!token) return <Navigate to="/login" replace />

    if (allowedRoles && !user?.roles?.some(r => allowedRoles.includes(r))) {
        // User does not have the required role
        return <Navigate to="/dashboard" replace />
    }

    return children
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />

            <Route path="/dashboard/*" element={<RequireAuth><DashboardLayout /></RequireAuth>}>
                <Route index element={<div>Dashboard Home</div>} />
                <Route path="users" element={<UsersPage />} />
            </Route>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    )
}