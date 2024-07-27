import React from "react";
import FieldSet from "../FieldSet";
import Field from "../Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {

  const{
    register,
    handleSubmit,
    formState:{errors},
    setError
  }=useForm()

  const submitForm=(formdata)=>{
    console.log(formdata)
    const user={
      email:"y@gmail.com",
      password:"123456789"
    }

    const found=formdata.email===user.email && formdata.password===user.password;

    if(!found){
      setError("root.random",{
        message:`user with email ${formdata.email} is not Found`,
        type:"random"
      })
    }
  }
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
            {...register('email',{required:"Email Address is Required"})} 
            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input 
             {...register('password',{required:"Password is required",
              minLength:{
                value:8,
                message:"Your Password Must be at Least 8 Character"
              }})} 
            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            />
          </Field>
          <div className="text-md">{errors?.root?.random?.message}</div>
         <Field>
          <button
          className="text-md text-white cursor-pointer border p-1 rounded-lg bg-purple-500 m-auto"
          >Login</button>
         </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
