import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { ROLES } from '../utils/constants';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { Button, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

export const getMenuItemsForUser = (role, privileges) => {
    return MENU_CONFIG[role]?.filter(item => !item.privilege || privileges.includes(item.privilege)) || [];
};

const SidebarLayout = ({ children }) => {
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = getMenuItemsForUser(user?.roles[0], privileges);

    return (
        <Layout className="h-screen">
            <Header className="flex justify-between items-center px-6 bg-white shadow">
                <h1 className="text-xl font-bold">📚 Library Management System</h1>
                <Button onClick={() => dispatch(logout())}>Logout</Button>
            </Header>
            <Layout>
                <Sider width={250} className="bg-gray-50">
                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        onClick={({ key }) => navigate(key)}
                        items={menuItems.map(item => ({
                            key: item.to,
                            // icon: item.icon ? React.createElement(Icons[item.icon]) : null,
                            label: item.label
                        }))}
                    />
                </Sider>
                <Content className="p-4">
                    <Outlet />
                    {children}
                </Content>
            </Layout>
            <Footer className="text-center">© 2025 Library System</Footer>
        </Layout>
    );
}

export default SidebarLayout