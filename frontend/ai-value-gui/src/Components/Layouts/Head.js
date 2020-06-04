import React from 'react';
import { Layout, Avatar } from 'antd';
import { Link, Route, Switch } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import Home from '../Home';

const { Header } = Layout;

export default class Head extends React.Component {
  render() {
    return (
      <Header style={{ padding: 10 }}>
        {/* <Avatar shape="square" size={64} icon={<UserOutlined />} /> */}
        <Avatar style={{ float: 'left' }} shape="square" src='./favicon.ico' />
        <Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
        <Route path="/" component={Home}>
          <Title style={{ color: 'white' }} level={3}>⠀<Link className="App-link" to="/">AI Value</Link></Title>
        </Route>
      </Header>
    )
  }
}