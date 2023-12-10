import { useState } from "react";

export default function useForm(submitHandler, initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (validate) {
            const newErrors = validate(values);
            setErrors(newErrors);

            if (Object.keys(newErrors).length > 0) {
                return;
            }
        }

        submitHandler(values);
    };

    return {
        values,
        errors,
        onChange,
        onSubmit,
    };
}
