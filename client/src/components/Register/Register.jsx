import { useContext, useState } from "react";
import './Register.module.css'
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.js";
import useForm from "../../hooks/useForm.js";

export default function Register() {
    const { registerHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerHandler, {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Sign Up</h2>
                <form className="register-form" onSubmit={onSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        onChange={onChange}
                        value={values.username}
                    />

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

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={onChange}
                        value={values.confirmPassword}
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
