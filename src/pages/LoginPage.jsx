import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const submit = (data) => {
    loginUser(data, navigate);
  };

  return (
    <section className="login__container">

        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className="email__container">

          <label className="label__email" htmlFor="email">Email: </label>
          <input
            {...register("email")}
            className="login__email"
            type="email"
            id="email"
            />
          </div>
          <div className="password__container">

          <label htmlFor="password">Password: </label>
          <input {...register("password")} className="login__password" type="password" id="password" />
          </div>

          <button className="login__btn">Login</button>
        </form>

    </section>
  );
};

export default LoginPage;
