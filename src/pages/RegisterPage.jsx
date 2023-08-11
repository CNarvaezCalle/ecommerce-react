import { useForm } from "react-hook-form" 
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/RegisterPage.css"

const RegisterPage = () => {

  
  const { register, reset, handleSubmit } = useForm()
  const { createUser } = useAuth()
  const navigate = useNavigate()

  const submit = (data) => {
    createUser(data, navigate)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="register__container">
      <div className="register__subcontainer">
      <div className="register__firstname">
        <label htmlFor="firstName" className="register__label">First Name: </label>
        <input {...register('firstName')} type="text" id="firstname" />
      </div>
      <div className="register__lastname">
        <label htmlFor="lastName" className="register__label">Last Name: </label>
        <input {...register('lastName')} type="text" id="lastname" />
      </div>
      <div className="register__email">
        <label htmlFor="email" className="register__label">Email: </label>
        <input {...register('email')} type="email" id="email" />
      </div>
      <div className="register__password">
        <label htmlFor="password" className="register__label">Password: </label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div className="register__phone">
        <label htmlFor="phone" className="register__label">Phone: </label>
        <input {...register('phone')} type="text" id="phone" />
      </div>
      <button className="register__btn">Create User</button>
      </div>
    </form>
  );
};

export default RegisterPage;
