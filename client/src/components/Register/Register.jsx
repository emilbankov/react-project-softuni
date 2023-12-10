import { useContext, useEffect, useState } from "react";
import './Register.module.css'
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";
import useForm from "../../hooks/useForm.js";

export default function Register() {
    const { registerHandler, errorFromServer } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const newErrors = {};
    useEffect(() => {
        if (errorFromServer && errorFromServer.message === "A user with the same email already exists") {
            newErrors.email = "Email is already taken";
            setErrors(newErrors);
        }
    }, [errorFromServer]);

    const validate = (values) => {

        if (!values.username) {
            newErrors.username = "Username is required";
        } else if (values.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        }

        if (!values.email) {
            newErrors.email = "Email is required";
        } else if (values.email.length < 10) {
            newErrors.email = "Email must be at least 10 characters";
        }

        if (!values.password) {
            newErrors.password = "Password is required";
        } else if (values.password.length < 4) {
            newErrors.password = "Password must be at least 4 characters";
        }

        if (!values.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
        }

        const firstErrorField = Object.keys(newErrors)[0];
        setErrors(firstErrorField ? { [firstErrorField]: newErrors[firstErrorField] } : {});

        return newErrors;
    };

    const { values, onChange, onSubmit } = useForm(registerHandler, {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }, validate);

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
                    {errors.username && <div className="error-msg"><span>{errors.username}</span></div>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values.email}
                    />
                    {errors.email && <div className="error-msg"><span>{errors.email}</span></div>}

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values.password}
                    />
                    {errors.password && <div className="error-msg"><span>{errors.password}</span></div>}

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={onChange}
                        value={values.confirmPassword}
                    />
                    {errors.confirmPassword && <div className="error-msg"><span>{errors.confirmPassword}</span></div>}

                    <div>
                        <button type="submit">Register</button>
                        <Link to="/login">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};