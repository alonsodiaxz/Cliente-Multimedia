import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import {} from "@ant-design/icons";
import "./LayoutHome.scss";
import MenuTop from "../components/MenuTop";
import useAuth from "../hooks/useAuth";
import FooterWeb from "../components/Footer";

function LoadRoutes(props) {
  const { routes } = props;

  const rutas = (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );

  return rutas;
}

export default function LayoutHome(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  const [themeDark, setthemeDark] = useState(false);
  const { user, isLoading } = useAuth();

  localStorage.setItem("loading", isLoading);

  //Condición que te redirige a esta ruta en caso de que no haya ningun usuario logeado.
  if (!user && !isLoading) {
    return (
      <>
        <Redirect to={{ pathname: "/" }} />
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <Layout className="layout-home">
        <Header
          className="layout-home__header"
          style={
            themeDark
              ? { backgroundColor: "#323a3f" }
              : { backgroundColor: "#726767" }
          }
        >
          <MenuTop themeDark={themeDark} setthemeDark={setthemeDark} />
        </Header>
        <Content
          style={
            themeDark
              ? { backgroundColor: "#252527" }
              : { backgroundColor: "#caac92" }
          }
          className="layout-home__content"
        >
          <LoadRoutes routes={routes} />
        </Content>

        <Footer
          style={
            themeDark
              ? { backgroundColor: "#323a3f" }
              : { backgroundColor: "#726767" }
          }
        >
          <FooterWeb />
        </Footer>
      </Layout>
    );
  }
  return null;
}
