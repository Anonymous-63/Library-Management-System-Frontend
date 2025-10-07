import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { ROLES } from '../utils/constants';
import { Link, Outlet } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { Button, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const SidebarLayout = () => {
    const user = useSelector(s => s.auth.user);
    const privileges = useSelector(s => s.auth.privileges);
    const dispatch = useDispatch();

    const menuItems = MENU_CONFIG[ROLES.ADMIN].filter(item =>
        !item.privilege || privileges.includes(item.privilege)
    );

    return (
        <Layout className='h-screen w-screen'>
            <Header className="flex justify-between items-center px-6">
                <h1 className="text-text text-xl font-semibold">
                    📚 Library Management System
                </h1>
                <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
                    Dark
                </Button>
            </Header>
            <Layout>
                <Sider width="20%">
                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems.map((item) => ({
                            key: item.to,
                            label: <Link to={item.to}>{item.label}</Link>,
                            icon: item.icon ? React.createElement(item.icon) : null,
                        }))}
                        onClick={({ key }) => navigate(key)}
                        className="mt-2 h-full"
                    />
                </Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default SidebarLayout