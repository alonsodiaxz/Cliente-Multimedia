import React, { useState } from "react";
import "./LoginForm.scss";
import { Form, Input, Button, notification, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants.js";
import { signIn } from "../../API/user";

export default function LoginForm() {
  const { Item } = Form;
  //Datos del Login recogidos del formulario
  const [Login, setLogin] = useState({
    email: null,
    password: null,
    LoginRemember: false,
  });

  const login = async (e) => {
    e.preventDefault();
    if (!Login.email || !Login.password) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const peticion = await signIn(Login);

      if (peticion.accessToken) {
        notification["success"]({
          message: `${peticion.message}`,
        });
        const { accessToken, refreshToken } = peticion;
        const localStorageEmail = "email";
        const localStoragePassword = "password";
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        if (Login.LoginRemember) {
          localStorage.setItem(localStorageEmail, Login.email);
          localStorage.setItem(localStoragePassword, Login.password);
        }

        //Una vez el usuario se logea le hace la redirección a la aplicación
        window.location.href = "/#/app";
      } else {
        notification["error"]({
          message: `${peticion.message}`,
        });
      }
    }
  };

  const changeForm = (ev) => {
    if (ev.target.name === "LoginRemember") {
      setLogin({
        ...Login,
        [ev.target.name]: ev.target.checked,
      });
    } else {
      setLogin({
        ...Login,
        [ev.target.name]: ev.target.value,
      });
    }
  };

  return (
    <Form className="login-form" onSubmitCapture={login} onChange={changeForm}>
      <Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="login-form__input"
        />
      </Item>
      <Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        ></Input>
      </Item>
      <Item>
        <Checkbox name="LoginRemember" type="checkbox">
          ¿Desea guardar los datos del último inicio de sesión?
        </Checkbox>
      </Item>
      <Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Item>
    </Form>
  );
}
