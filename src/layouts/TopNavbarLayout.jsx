import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { Link, Outlet } from 'react-router';
import { logout } from '../features/auth/authSlice';

const TopNavbarLayout = () => {
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);
    const dispatch = useDispatch();

    const menuItems = MENU_CONFIG[user?.roles[0]]?.filter(item =>
        !item.privilege || privileges.includes(item.privilege)
    ) || [];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white border-b p-4 flex justify-between items-center">
                <div className="font-bold">Library</div>
                <p>Welcome {user?.email}</p>
                <nav>
                    {menuItems.map(item => (
                        <Link key={item.to} className="mr-4" to={item.to}>{item.label}</Link>
                    ))}
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </nav>
            </header>
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    )
}

export default TopNavbarLayout