import { useSelector } from "react-redux"
import { ROLES } from "../utils/constants";
import SidebarLayout from "./SidebarLayout";
import TopNavbarLayout from "./TopNavbarLayout";

export default function DashboardLayout({ children }) {
    const user = useSelector(s => s.auth.user)
    if (user?.roles.includes(ROLES.ADMIN)) {
        return <SidebarLayout>{children}</SidebarLayout>;
    }

    return <TopNavbarLayout>{children}</TopNavbarLayout>;
}