import {Button,Card,FormElement,PageHeader,TextField} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";

function Login() {
  const [formData,setFormData]=useState({email:'',password:''})

  const login = () => {
    if(!formData.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      alert('Enter valid email')
      return
    } 
    if(!formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
      alert('Enter valid password')
      return
    }
    alert('Logged in successfully');
    setFormData({email:'',password:''}) 
  };

  return (
    <Card extraClass="login">
      <PageHeader title="Login" />
      <FormElement>
        <TextField required value={formData.email} onChange={(e)=>{setFormData({...formData,email:e})}} name="Email"  type="email" placeHolder="Enter email" />
        <TextField required value={formData.password} onChange={(e)=>{setFormData({...formData,password:e})}} name="Password"  type="password" placeHolder="Enter password" showHelp='Password should contain atleast 8 characters with one number,one special character and one capital letter.'/>
        <Button content="Login" onClick={login}/>
      </FormElement>
    </Card>
  );
}

export default Login;
