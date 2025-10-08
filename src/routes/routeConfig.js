import { lazy } from "react";

const Dashboard = lazy(() => import("../layouts/DashboardLanding"));
const Users = lazy(() => import("../features/users/pages/UsersPage"));
const Login = lazy(() => import("../features/auth/pages/Login"));

import MainLayout from "../layouts/DashboardLayout";
import AdminLayout from "../layouts/AuthLayout";
import { ROLES } from "../utils/constants";

export const ROUTES = [
    {
        path: "/dashboard",
        element: Dashboard,
        layout: MainLayout,
        type: "private",
        roles: [ROLES.ADMIN, ROLES.LIBRARIAN, ROLES.MEMBER, ROLES.ACCOUNTANT],
        menu: {
            label: "Dashboard",
            icon: "DashboardOutlined",
            key: "dashboard",
        },
    },
    {
        path: "/profile",
        element: Users,
        layout: MainLayout,
        type: "private",
        roles: [ROLES.ADMIN, ROLES.LIBRARIAN, ROLES.MEMBER, ROLES.ACCOUNTANT],
        menu: {
            label: "Profile",
            icon: "UserOutlined",
            key: "profile",
        },
    },
    {
        path: "/admin",
        element: Login,
        layout: AdminLayout,
        type: "private",
        roles: [ROLES.ADMIN],
        menu: {
            label: "Admin Panel",
            icon: "SettingOutlined",
            key: "admin",
        },
    },
];
