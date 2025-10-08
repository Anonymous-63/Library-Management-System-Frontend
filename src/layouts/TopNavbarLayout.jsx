import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { Link, Outlet } from 'react-router';
import { logout } from '../features/auth/authSlice';

export default function TopNavbarLayout({ children }) {
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);
    const dispatch = useDispatch();

    const menuItems = MENU_CONFIG[user?.roles[0]]?.filter(item => !item.privilege || privileges.includes(item.privilege)) || [];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white border-b p-4 flex justify-between items-center">
                <div className="font-bold text-xl">Library</div>
                <div className="flex items-center gap-4">
                    {menuItems.map(item => (
                        <Link key={item.to} className="hover:underline" to={item.to}>{item.label}</Link>
                    ))}
                    <button onClick={() => dispatch(logout())} className="text-red-500">Logout</button>
                </div>
            </header>
            <main className="flex-1 p-6">
                <Outlet />
                {children}
            </main>
        </div>
    );
}