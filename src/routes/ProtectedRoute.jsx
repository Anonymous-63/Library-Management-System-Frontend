import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ element, allowedRoles, allowedPrivileges }) {
    const token = useSelector(s => s.auth.accessToken);
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);

    if (!token) return <Navigate to="/login" replace />;

    if (allowedRoles && !user?.roles?.some(r => allowedRoles.includes(r))) {
        return <Navigate to="/dashboard" replace />;
    }

    if (allowedPrivileges && !privileges?.some(p => allowedPrivileges.includes(p))) {
        return <Navigate to="/dashboard" replace />;
    }

    return element;
}