import React, { useEffect, useState } from 'react'
import { auth, googleAuthProvider } from "../../firebase"
import { toast } from 'react-toastify'
import { Button } from 'antd'
import { MailOutlined, GoogleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from "axios"

const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/create-or-update-user`,
        {},
        {
            headers: {
                authtoken
            }
        }
    )
}

const Login = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const { user } = useSelector((state) => ({ ...state }))

    useEffect(() => {
        if (user && user.token) history.push("/users")
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await auth.signInWithEmailAndPassword(email, password)
            const { user } = result
            const idTokenResult = await user.getIdTokenResult()

            createOrUpdateUser(idTokenResult.token).then((res)=>console.log(res)).catch()

            // dispatch({
            //     type: "LOGGED_IN_USER",
            //     payload: {
            //         email: user.email,
            //         token: idTokenResult.token
            //     }
            // })
            // history.push("/users")
        } catch (error) {
            toast.error(error.message)
            setLoading(true)
        }
    }

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider).
            then(async (result) => {
                const { user } = result
                const idTokenResult = await user.getIdTokenResult()

                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                })
                history.push("/users")
            }).catch((err) => {
                toast.error(err.message)
            })
    }

    const loginForm = () => <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
                type="email"
                className='form-control'
                onChange={e => setEmail(e.target.value)}
                autoFocus
                value={email}
                placeholder="Your email"
            >
            </input>
        </div>
        <div className='form-group'>
            <input
                type="password"
                className='form-control'
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="Your password"
            >
            </input>
        </div>
        <br />
        <Button
            onClick={handleSubmit}
            type="primary"
            className='mb-3'
            block
            shape='round'
            icon={<MailOutlined />}
            size="large"
            disabled={!email || password.length < 6}
        >
            Login with Email/Password
        </Button>
    </form>

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 col-offset-3'>
                    {loading ? <h4 className='text-danger'>Loading...</h4> : <h4>
                        Login
                    </h4>}
                    {loginForm()}
                    <Button
                        onClick={googleLogin}
                        type="danger"
                        className='mb-3'
                        block
                        shape='round'
                        icon={<GoogleOutlined />}
                        size="large"
                    >
                        Login with Google
                    </Button>
                    <Link to="/forgot/password" className='float-right text-danger'>Forgot Password</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;