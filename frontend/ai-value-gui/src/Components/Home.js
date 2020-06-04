import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import Title from 'antd/lib/typography/Title'
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, Route, Switch } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Head from './Layouts/Head'

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  return (
    <div className="App">
      <Layout>
        <Head />
      </Layout>

      <Link className="App-link" to="/login">
        <Button className="btn" type="primary" renderAs="button" aria-pressed="true">
          <span>Login</span>
        </Button>
      </Link>
      <Link className="App-link" to="/register">
        <Button className="btn" type="primary" renderAs="button" aria-pressed="true">
          <span>Register</span>
        </Button>
      </Link>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />



    </div>
  );
}

export default Home;