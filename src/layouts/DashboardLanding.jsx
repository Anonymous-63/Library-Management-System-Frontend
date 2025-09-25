import { useSelector } from "react-redux";

export default function DashboardLanding() {
    const user = useSelector(s => s.auth.user);

    if (user.roles.includes("ROLE_ADMIN")) {
        return <div>Admin Dashboard Home</div>;
    }

    if (user.roles.includes("ROLE_LIBRARIAN")) {
        return <div>Librarian Dashboard Home</div>;
    }

    if (user.roles.includes("ROLE_MEMBER")) {
        return <div>Member Dashboard Home</div>;
    }

    if (user.roles.includes("ROLE_ACCOUNTANT")) {
        return <div>Accountant Dashboard Home</div>;
    }

    return <div>Welcome to Dashboard</div>;
}