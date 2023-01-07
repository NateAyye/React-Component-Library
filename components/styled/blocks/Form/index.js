import React, { useState } from "react";
import Button from "../../elements/Button";
import { SForm, FormTitle, FormControl, Label, Input } from "./styles";

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const [form, setForm] = useState();

  
  return (
    <SForm>
      <FormTitle>{title}</FormTitle>
      {formArr.map(({ label, name, type }, index) => (
        <FormControl key={index}>
          <Label>{label}</Label>
          <Input name={name} type={type} />
        </FormControl>
      ))}
      <Button as="button" onSubmit={onSubmit} color="#23a9f2" style={{ width: 60 + "%" }}>
        {submitBtn}
      </Button>
    </SForm>
  );
};

Form.defaultProps = {
  title: "Sign In",
  formArr: [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
  submitBtn: "Sign In",
  onSubmit: (form) => console.log(form),
  redirect: {
    label: "don't have an account",
    link: {
      label: "Register",
      to: "/register",
    },
  },
};

export default Form;
