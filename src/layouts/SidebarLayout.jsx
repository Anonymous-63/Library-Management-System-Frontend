import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { ROLES } from '../utils/constants';
import { Link, Outlet } from 'react-router';
import { logout } from '../features/auth/authSlice';

const SidebarLayout = () => {
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);
    const dispatch = useDispatch();

    const menuItems = MENU_CONFIG[ROLES.ADMIN].filter(item =>
        !item.privilege || privileges.includes(item.privilege)
    );

    return (
        <div className="min-h-screen flex">
            <aside className="w-64 bg-white border-r p-4">
                <div className="font-bold mb-6">Admin Panel</div>
                <nav>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.to} className="mb-2">
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))}
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
    );
}

export default SidebarLayout