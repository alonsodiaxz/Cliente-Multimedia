import React from "react";
import "./SignIn.scss";
import { Layout, Tabs } from "antd";
import Logo from "../../assets/img/png/peliculas.png";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="app-peliculas"></img>
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span> Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span> Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
