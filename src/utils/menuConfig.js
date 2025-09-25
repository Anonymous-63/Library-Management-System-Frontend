import { PRIVILEGES, ROLES } from "./constants";

export const MENU_CONFIG = {
  [ROLES.ADMIN]: [
    { label: "Dashboard", to: "/dashboard", icon: "home" },
    { label: "Users", to: "/dashboard/users", icon: "users", privilege: PRIVILEGES.MANAGE_USERS },
    { label: "Roles", to: "/dashboard/roles", icon: "shield", privilege: PRIVILEGES.MANAGE_ROLES },
    { label: "Finance", to: "/dashboard/finance", icon: "dollar", privilege: PRIVILEGES.MANAGE_FINANCE },
  ],
  [ROLES.LIBRARIAN]: [
    { label: "Dashboard", to: "/dashboard", icon: "home" },
    { label: "Books", to: "/dashboard/books", icon: "book", privilege: PRIVILEGES.VIEW_BOOK },
    { label: "Issue Books", to: "/dashboard/issue", icon: "send", privilege: PRIVILEGES.ISSUE_BOOK },
  ],
  [ROLES.MEMBER]: [
    { label: "Dashboard", to: "/dashboard", icon: "home" },
    { label: "My Books", to: "/dashboard/my-books", icon: "book" },
  ],
  [ROLES.ACCOUNTANT]: [
    { label: "Dashboard", to: "/dashboard", icon: "home" },
    { label: "Finance Reports", to: "/dashboard/finance", icon: "dollar", privilege: PRIVILEGES.MANAGE_FINANCE },
  ],
};