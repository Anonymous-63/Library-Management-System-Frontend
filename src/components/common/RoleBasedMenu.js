import { PRIVILEGES, ROLES } from "../../utils/constants";

export const adminSidebarMenu = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: "DashboardOutlined",
        path: "/dashboard",
    },
    {
        key: "books",
        label: "Books",
        icon: "BookOutlined",
        children: [
            { key: "add-book", label: "Add Book", path: "/books/add", privilege: PRIVILEGES.ADD_BOOK },
            { key: "manage-books", label: "Manage Books", path: "/books/manage", privilege: PRIVILEGES.UPDATE_BOOK },
            { key: "issued", label: "Issued Books", path: "/books/issued", privilege: PRIVILEGES.ISSUE_BOOK },
            { key: "returned", label: "Returned Books", path: "/books/returned", privilege: PRIVILEGES.RETURN_BOOK },
        ],
    },
    {
        key: "users",
        label: "Users",
        icon: "UsergroupAddOutlined",
        children: [
            { key: "manage-users", label: "Manage Users", path: "/users", privilege: PRIVILEGES.MANAGE_USERS },
            { key: "roles", label: "Roles & Privileges", path: "/roles", privilege: PRIVILEGES.MANAGE_ROLES },
        ],
    },
    {
        key: "finance",
        label: "Finance",
        icon: "DollarCircleOutlined",
        path: "/finance",
        privilege: PRIVILEGES.MANAGE_FINANCE,
    },
    {
        key: "reports",
        label: "Reports",
        icon: "BarChartOutlined",
        path: "/reports",
    },
    {
        key: "settings",
        label: "Settings",
        icon: "SettingOutlined",
        path: "/settings",
    },
];

export const topbarMenus = {
    [ROLES.LIBRARIAN]: [
        { key: "dashboard", label: "Dashboard", path: "/dashboard" },
        { key: "issue", label: "Issue Book", path: "/books/issue", privilege: PRIVILEGES.ISSUE_BOOK },
        { key: "return", label: "Return Book", path: "/books/return", privilege: PRIVILEGES.RETURN_BOOK },
        { key: "manage", label: "Manage Books", path: "/books/manage", privilege: PRIVILEGES.UPDATE_BOOK },
    ],
    [ROLES.MEMBER]: [
        { key: "my-books", label: "My Books", path: "/my-books" },
        { key: "browse", label: "Browse Library", path: "/books" },
        { key: "history", label: "History", path: "/history" },
    ],
    [ROLES.ACCOUNTANT]: [
        { key: "dashboard", label: "Dashboard", path: "/dashboard" },
        { key: "transactions", label: "Transactions", path: "/finance/transactions" },
        { key: "reports", label: "Reports", path: "/finance/reports" },
    ],
};