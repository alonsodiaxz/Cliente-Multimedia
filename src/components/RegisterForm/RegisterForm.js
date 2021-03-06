import React, { useState } from "react";
import "./RegisterForm.scss";
import { Form, Button, Checkbox, notification, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  emailValidation,
  minLengthValidation,
  nameLastNameValidation,
} from "../../utils/FormValidation";
import { signUp } from "../../API/user";

export default function RegisterForm() {
  const [input, setInputs] = useState({
    name: null,
    lastname: null,
    email: null,
    password: null,
    repeatPassword: null,
    privacyPolicy: false,
  });
  const [formValidation, setformValidation] = useState({
    name: null,
    lastname: null,
    email: null,
    password: null,
    repeatPassword: null,
    privacyPolicy: false,
  });

  const changeForm = (ev) => {
    if (ev.target.name === "privacyPolicy") {
      setInputs({
        ...input,
        [ev.target.name]: ev.target.checked,
      });
    } else {
      setInputs({ ...input, [ev.target.name]: ev.target.value });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (name === "name") {
      setformValidation({
        ...formValidation,
        [name]: nameLastNameValidation(e.target),
      });
    }

    if (name === "lastname") {
      setformValidation({
        ...formValidation,
        [name]: nameLastNameValidation(e.target),
      });
    }
    if (type === "email") {
      setformValidation({
        ...formValidation,
        [name]: emailValidation(e.target),
      });
    }

    if (type === "password") {
      setformValidation({
        ...formValidation,
        [name]: minLengthValidation(e.target, 6),
      });
    }

    if (type === "checkbox") {
      setformValidation({
        ...formValidation,
        [name]: e.target.checked,
      });
    }
  };

  const Register = async (ev) => {
    ev.preventDefault(); //Para que cuando pulsemos el boton de submit no recargue la pagina.
    const { name, lastname, email, password, repeatPassword, privacyPolicy } =
      formValidation;
    const nameValue = input.name;
    const lastnameValue = input.lastname;
    const emailValue = input.email;
    const passwordValue = input.password;
    const repeatPasswordValue = input.repeatPassword;
    const privacyPolicyVal = input.privacyPolicy;

    if (
      !nameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue ||
      !repeatPasswordValue ||
      !privacyPolicyVal
    ) {
      notification["error"]({ message: "Todos los campos son obligatorios." });
    } else {
      if (
        name &&
        lastname &&
        email &&
        password &&
        repeatPassword &&
        privacyPolicy
      ) {
        if (passwordValue === repeatPasswordValue) {
          //Conectamos con el API para registrar el usuario
          const result = await signUp(input);
          if (result.user) {
            notification["success"]({
              message: "Usuario registrado con ??xito.",
            });
            resetForm();
          } else {
            notification["error"]({
              message: `${result}`,
            });
          }
        } else {
          notification["error"]({ message: "Las contrase??as no son iguales." });
        }
      } else {
        notification["error"]({ message: "Los campos estan incorrectos." });
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      name: null,
      lastname: null,
      email: null,
      password: null,
      repeatPassword: null,
      privacyPolicy: false,
    });

    setformValidation({
      name: null,
      lastname: null,
      email: null,
      password: null,
      repeatPassword: null,
      privacyPolicy: false,
    });
  };
  const { Item } = Form;
  return (
    <Form
      className="register-form"
      onSubmitCapture={Register}
      onChange={changeForm}
    >
      <Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="name"
          name="name"
          placeholder="Nombre"
          className="register-form__input"
          value={input.name}
          onChange={inputValidation}
        />
      </Item>
      <Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="lastname"
          name="lastname"
          placeholder="Apellidos"
          className="register-form__input"
          value={input.lastname}
          onChange={inputValidation}
        />
      </Item>
      <Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electr??nico"
          className="register-form__input"
          value={input.email}
          onChange={inputValidation}
        />
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contrase??a"
          className="register-form__input"
          value={input.password}
          onChange={inputValidation}
        ></Input>
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password" //Hace que lo que estes escribiendo se poca en formato oculto
          name="repeatPassword"
          placeholder="Repita la contrase??a"
          className="register-form__input"
          value={input.repeatPassword}
          onChange={inputValidation}
        ></Input>
      </Item>
      <Item>
        <Checkbox
          name="privacyPolicy"
          type="checkbox"
          checked={input.privacyPolicy}
          onChange={inputValidation}
        >
          He le??do y acepto la pol??tica de privacidad
        </Checkbox>
      </Item>
      <Item>
        <Button htmlType="submit" className="register-form__button">
          Crear Cuenta
        </Button>
      </Item>
    </Form>
  );
}
