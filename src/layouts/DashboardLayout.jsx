import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router"
import { logout } from "../features/auth/authSlice"

export default function DashboardLayout() {
    const user = useSelector(s => s.auth.user)
    const dispatch = useDispatch()
    return (
        <div className="min-h-screen flex">
            <aside className="w-64 bg-white border-r">
                <div className="p-4">Logo</div>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Home</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex justify-between mb-4">
                    <div>Welcome {user?.email}</div>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </div>
                <Outlet />
            </main>
        </div>
    )
}