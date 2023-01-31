import {
  Button,
  Card,
  FormElement,
  PageHeader,
  TextField,
} from "@cedcommerce/ounce-ui";
import React from "react";

function Login() {

  return (
    <Card extraClass="login">
      <PageHeader title="Login" />
      <FormElement>
        <TextField
          name="Email"
          type="email"
          placeHolder="Enter email"
        />
        <TextField
          name="Password"
          type="password"
          placeHolder="Enter password"
        />
        <Button content="Login"/>
      </FormElement>
    </Card>
  );
}

export default Login;
