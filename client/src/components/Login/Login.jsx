import { useState } from "react";
import './Login.module.css';
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm.js";

export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: ''
    });


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO

    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Sign In</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values.password}
                        />

                    <div>
                        <button type="submit">Login</button>
                        <Link  to="/register">Don't have an account?</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}