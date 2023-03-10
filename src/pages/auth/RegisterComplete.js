import React, { useState, useEffect } from 'react'
import { auth } from "../../firebase"
import { toast } from 'react-toastify'

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Email and password is required")
        }

        if (password.length < 6) {
            toast.error("Password must be atleast 6 characters long")
        }
        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href
            )
            if (result.user.emailVerified) {
                window.localStorage.removeItem("emailForRegistration")

                let user = auth.currentUser;
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult()
                history.push("/users")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const completeRegistrationForm = () => <form onSubmit={handleSubmit}>
        <input
            type="email"
            className='form-control'
            value={email}
            disabled
        >
        </input>
        <input
            type="password"
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
        >
        </input>
        <br />
        <button type='submit' className='btn btn-raised'>
            Complete Registration
        </button>
    </form>

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 col-offset-3'>
                    <h4>
                        Register
                    </h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete;