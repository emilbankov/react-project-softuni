import './Login.module.css';
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext.jsx';

export default function Login() {
    const { loginHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginHandler, {
        email: "",
        password: ""
    });

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Sign In</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values.password}
                    />

                    <div>
                        <button type="submit">Login</button>
                        <Link to="/register">Don't have an account?</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}