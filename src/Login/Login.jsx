import { useState } from "react";
import './Login.module.css';
import { Link } from "react-router-dom";

export default function Login() {
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
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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