import { useState } from "react";
import './Register.module.css'
import { Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // TODO
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Sign Up</h2>
                <form className="register-form" onSubmit={handleRegister}>
                    <label htmlFor="register-username">Username:</label>
                    <input
                        type="text"
                        id="register-username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="register-email">Email:</label>
                    <input
                        type="email"
                        id="register-email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="register-password">Password:</label>
                    <input
                        type="password"
                        id="register-password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="register-confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="register-confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div>
                        <button type="submit">Register</button>
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
