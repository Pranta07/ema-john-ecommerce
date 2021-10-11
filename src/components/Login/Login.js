import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const { user, handleGoogleSignIn } = useFirebase();

    return (
        <div className="d-flex justify-content-center">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <br />
                    <input
                        placeholder="Name"
                        defaultValue=""
                        {...register("Name")}
                    />
                    <br /> <br />
                    <input
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <p>
                        Are you new to this site?{" "}
                        <Link to="/register">Register</Link>
                    </p>
                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary"
                    />{" "}
                    <br />
                </form>
                -----------or---------
                <br />
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-primary"
                >
                    Google sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
