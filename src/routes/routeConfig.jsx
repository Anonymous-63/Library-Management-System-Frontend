import { lazy } from "react";
import DashboardLanding from "../layouts/DashboardLanding";
import Login from "../features/auth/pages/Login";

export const routeConfig = [
    {
        path: "/login",
        element: <Login />,
        layout: "auth",
        public: true,
    },
    {
        path: "/dashboard",
        element: <DashboardLanding />,
    },
    // {
    //     path: "/users",
    //     element: <UserList />,
    //     allowedPrivileges: ["USER_VIEW"],
    //     children: [
    //         {
    //             path: ":id",
    //             modal: true,
    //             element: <UserModal />,
    //             allowedPrivileges: ["USER_EDIT"],
    //         },
    //     ],
    // },
];