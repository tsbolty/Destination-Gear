import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id= "signup-firstname" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      <input type="text" id= "signup-lastname" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      <input type="text" id= "signup-email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" id= "signup-phonenumber" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12, pattern: /^[2-9]\d{2}-\d{3}-\d{4}$/i})} />

      <input type="submit" />
    </form>
  );
}