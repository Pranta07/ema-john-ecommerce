import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input {...register("Name")} placeholder="Name" /> <br /> <br />
                <input {...register("Email")} placeholder="Email" /> <br />{" "}
                <br />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <br />
                <br />
                <p>
                    Already Registered? Please <Link to="/login">Login</Link>
                </p>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                />
            </form>
        </div>
    );
};

export default Register;
