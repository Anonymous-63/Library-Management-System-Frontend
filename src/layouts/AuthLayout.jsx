import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function AuthLayout({ children }) {
    return (
        <Layout className="h-screen w-screen">
            <Content className="flex justify-center items-center h-full p-5">
                {children}
            </Content>
        </Layout>
    )
}