import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MENU_CONFIG } from '../utils/menuConfig';
import { ROLES } from '../utils/constants';
import { Link, Outlet } from 'react-router';
import { logout } from '../features/auth/authSlice';
import { Layout, Menu } from 'antd';
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
            <Header>Header</Header>
            <Layout>
                <Sider width="25%">
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
        // <div className="min-h-screen flex">
        //     <aside className="w-64 bg-white border-r p-4">
        //         <div className="font-bold mb-6">Admin Panel</div>
        //         <Menu mode='inline' selectedKeys={[location.pathname]} items={menuItems.map((item) => ({
        //             key: item.to,
        //             lable: <Link to={item.to}>{item.label}</Link>,
        //             icon: item.icon ? React.createElement(item.icon) : null,
        //         }))}
        //             onClick={({ key }) => navigate(key)}
        //         />
        //     </aside>
        //     <main className="flex-1 p-6">
        //         <div className="flex justify-between mb-4">
        //             <div>Welcome {user?.email}</div>
        //             <button onClick={() => dispatch(logout())}>Logout</button>
        //         </div>
        //         <Outlet />
        //     </main>
        // </div>
    );
}

export default SidebarLayout