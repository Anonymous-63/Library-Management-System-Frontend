import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { login } from "../authSlice"
import googleImg from "@/assets/icons/google.png"
import githubImg from "@/assets/icons/github.png"
import { Button, Card, Checkbox, Divider, Form, Input, notification, Typography } from "antd"
const { Title, Text, Link } = Typography;
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [notificationApi, contextHolder] = notification.useNotification();

    const { control, handleSubmit, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(loginSchema), mode: "onTouched" })

    const onFinish = async (values) => {
        try {
            const res = await dispatch(login(values)).unwrap();
            navigate("/dashboard");
        } catch (err) {
            notificationApi.error({
                message: 'Login Failed',
                description: 'Please check your email and password.',
                placement: 'topRight',
                duration: 3,
            });
        }
    };

    const handleOAuthLogin = (provider) => {
        const baseApi = import.meta.env.VITE_API_URL; // http://localhost:8080/api
        const redirectUri = `${window.location.origin}/oauth2/redirect`;
        window.location.href = `${baseApi}/oauth2/authorization/${provider}?redirect_uri=${encodeURIComponent(redirectUri)}`;
    };


    return (
        <>
            {contextHolder}
            <Card variant="outlined" className="w-full max-w-md">
                <Title level={2} className="mb-4">
                    Sign In
                </Title>

                <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
                    <Form.Item
                        label="Email"
                        htmlFor="email"
                        validateStatus={errors.email ? "error" : ""}
                        help={errors.email?.message}
                    >
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input {...field}
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    size="large" />
                            )}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        htmlFor="password"
                        validateStatus={errors.password ? "error" : ""}
                        help={errors.password?.message}
                    >
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input.Password {...field}
                                    id="password"
                                    placeholder="******"
                                    autoComplete="current-password"
                                    size="large"
                                />
                            )}
                        />
                    </Form.Item>

                    <Form.Item className="!mb-2">
                        <Controller
                            name="remember"
                            control={control}
                            defaultValue={false}
                            render={({ field }) => (
                                <Checkbox {...field} checked={field.value}>
                                    Remember me
                                </Checkbox>
                            )}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            className="w-full !font-semibold"
                            htmlType="submit"
                            loading={isSubmitting}
                        >
                            Sign In
                        </Button>
                    </Form.Item>

                    <div className="text-center">
                        <Link to="/forgot-password" className=" !text-gray-700 dark:!text-neutral-200 hover:!underline">
                            Forgot your password?
                        </Link>
                    </div>
                </Form>
                <Divider plain className="!my-2">or</Divider>
                <div className="flex flex-col gap-3">
                    <Button
                        icon={<img src={googleImg} alt="Google" className="w-5 h-5" />}
                        onClick={() => handleOAuthLogin("google")}
                        size="large"
                        className="w-full"
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        onClick={() => handleOAuthLogin("github")}
                        icon={<img src={githubImg} alt="Github" className="w-5 h-5" />}
                        size="large"
                        className="w-full"
                    >
                        Sign in with Github
                    </Button>
                    <Text className="self-center">
                        Don&apos;t have an account?{" "}
                        <Link strong to="/register" className="!text-gray-700 dark:!text-neutral-200 hover:!underline">
                            Sign Up
                        </Link>
                    </Text>
                </div>
            </Card>
        </>
    )
}