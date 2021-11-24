import React, { useState } from "react";
import peliculas from "../../assets/img/png/peliculas.png";
import { Button, Menu, Switch, Modal, Input } from "antd";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import "./MenuTop.scss";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { logout } from "../../API/auth";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function MenuTop(props) {
  const { confirm } = Modal;
  const { Item } = Menu;
  const { themeDark, setthemeDark } = props;
  const { user } = useAuth();
  const [premiere, setpremiere] = useState(false);
  const [relleno, setrelleno] = useState(false);
  const [filmValue, setfilmValue] = useState("");

  function onChange(checked) {
    setthemeDark(!themeDark);
  }

  const onClickLogOut = () => {
    confirm({
      title: "Cerrando sesión",
      content: `¿${user.name} estas seguro de que quieres cerrar sesión?`,
      okText: "Cerrar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        logout();
        window.location.reload();
      },
    });
  };

  const onChangeInput = (e) => {
    const filmName = e.target.value;
    localStorage.setItem("filmvalue", `${filmName}`);
    setfilmValue(filmName);
    if (filmName) {
      setrelleno(true);
    } else {
      setrelleno(false);
    }
  };

  const click = (e) => {
    const gender = e.target.innerText;
    localStorage.setItem("gender", `${gender}`);
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={peliculas}
          alt="Alonso Diaz Sobrino"
        />
      </div>
      <div className="menu-top__center">
        <Menu>
          <Item key="1">
            <Link to={{ pathname: "/app/populares", data: !premiere }}>
              Populares
            </Link>
          </Item>
          <Item key="2">
            <Link to={{ pathname: "/app/allFilms", data: !premiere }}>
              Todas
            </Link>
          </Item>
          <Item key="3">
            <Link to={{ pathname: "/app/estrenos", data: !premiere }}>
              Estrenos
            </Link>
          </Item>
          <Item key="4">
            <Link onClick={click} to={{ pathname: "/app/updateFilms" }}>
              Acción
            </Link>
          </Item>
          <Item key="5">
            <Link onClick={click} to={{ pathname: "/app/updateFilms" }}>
              Fantasía
            </Link>
          </Item>
          <Item key="6">
            <Link onClick={click} to={{ pathname: "/app/updateFilms" }}>
              Terror
            </Link>
          </Item>
        </Menu>
      </div>
      <div className="menu-top__right">
        <span>
          {themeDark ? (
            <span>
              <BsFillMoonFill />
            </span>
          ) : (
            <span>
              <BsFillSunFill />
            </span>
          )}
        </span>
        <Switch onChange={onChange} />
        <div className="menu-top__right-buscar">
          <Input
            type="text"
            placeholder="buscar"
            onChange={onChangeInput}
            value={filmValue}
          ></Input>
          {relleno ? (
            <Link to="/app/searchs">
              <Button
                onClick={() => {
                  setfilmValue("");
                }}
              >
                <SearchOutlined />
              </Button>
            </Link>
          ) : (
            false
          )}
        </div>

        <Button type="link" onClick={onClickLogOut}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
