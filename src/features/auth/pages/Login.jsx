import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { login } from "../authSlice"
import googleImg from "@/assets/icons/google.png"
import githubImg from "@/assets/icons/github.png"
import { Button, Card, Checkbox, Divider, Form, Input, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { useState } from "react"
const { Title, Text, Link } = Typography;

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector(s => s.auth.status)

    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await dispatch(login(values)).unwrap();
            navigate("/dashboard");
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card variant="outlined" className="w-full max-w-md">
            <Title level={2} className="mb-4">
                Sign In
            </Title>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Please enter a valid email!" },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password
                        placeholder="******"
                        autoComplete="current-password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" className="!mb-2">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item className="mt-4">
                    <Button
                        type="primary"
                        size="large"
                        className="w-full"
                        htmlType="submit"
                        loading={loading || status === "loading"}
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
            <div className="text-center">
                <Link to="/forgot-password" className="!text-gray-700 hover:!underline">
                    Forgot your password?
                </Link>
            </div>
            <Divider plain className="!my-2">or</Divider>

            <div className="flex flex-col gap-3">
                <Button
                    icon={<img src={googleImg} alt="Google" className="w-5 h-5" />}
                    size="large"
                    className="w-full"
                >
                    Sign in with Google
                </Button>
                <Button
                    icon={<img src={githubImg} alt="Github" className="w-5 h-5" />}
                    size="large"
                    className="w-full"
                >
                    Sign in with Github
                </Button>
                <Text className="self-center">
                    Don&apos;t have an account?{" "}
                    <Link strong to="/register" className="text-blue-500">
                        Sign Up
                    </Link>
                </Text>
            </div>
        </Card>
    )
}
