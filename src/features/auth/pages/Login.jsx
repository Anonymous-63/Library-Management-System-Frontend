import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { login } from "../authSlice"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector(s => s.auth.status)

    const { Item } = Form

    const onFinish = async (values) => {
        console.log('Form values:', values)
        try {
            const res = await dispatch(login(values)).unwrap()
            navigate('/dashboard')
        } catch (e) {
            console.error('Login failed:', e)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Form name="login" onFinish={onFinish} style={{ width: 360 }}>
                <Item name="email" rules={[{ required: true, message: 'Email is required' }]}>
                    <Input placeholder="Email" />
                </Item>
                <Item name="password" rules={[{ required: true, message: 'Password is required' }]}>
                    <Input.Password placeholder="Password" />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit" loading={status === 'loading'} block>
                        Sign in
                    </Button>
                </Item>
            </Form>
        </div>
    )
}
