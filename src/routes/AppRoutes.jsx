import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routeConfig";
import { Navigate, Route, Routes } from "react-router";

const renderRoutes = (routesArray) =>
    routesArray.map((route, index) => {
        const { path, element, layout: Layout, protected: isProtected, allowedRoles, allowedPrivileges } = route;

        let content = element;
        if (isProtected) {
            content = <ProtectedRoute element={element} allowedRoles={allowedRoles} allowedPrivileges={allowedPrivileges} />;
        }

        if (Layout) {
            content = <Layout>{content}</Layout>;
        }

        return <Route key={index} path={path} element={content} />;
    });

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {renderRoutes(ROUTES)}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </Suspense>
    );
}