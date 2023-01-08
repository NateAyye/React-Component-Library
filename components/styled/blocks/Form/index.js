import React, { useEffect, useState } from "react";
import Button from "../../elements/Button";
import {
  SForm,
  FormTitle,
  FormControl,
  Label,
  Input,
  RedirectLabel,
  Redirect,
  RedirectLink,
} from "./styles";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const initialForm = prepareForm(formArr);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = () => {
    onSubmit(form, () => setForm(initialForm));
  };

  return (
    <SForm autoComplete="off">
      <FormTitle>{title}</FormTitle>
      {formArr.map(({ label, name, type }, index) => (
        <FormControl key={index}>
          <Label>{label}</Label>
          <Input name={name} type={type} value={form.name} onChange={(e) => onChangeHandler(e)} />
        </FormControl>
      ))}
      <Button
        as="button"
        onClick={(e) => {
          e.preventDefault();
          onSubmitHandler(e);
        }}
        color="#23a9f2"
        style={{ margin: 1.5 +'rem' , width: 60 + "%" }}
      >
        {submitBtn}
      </Button>
      {redirect && (
        <Redirect>
          <RedirectLabel>{redirect.label}&emsp;</RedirectLabel>
          <RedirectLink href={redirect.link.to}>{redirect.link.label}</RedirectLink>
        </Redirect>
      )}
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
    label: "Don't have an account",
    link: {
      label: "Register",
      to: "/register",
    },
  },
};

export default Form;
