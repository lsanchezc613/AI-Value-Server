import React, { Component } from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import { UserOutlined, BarChartOutlined, AreaChartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Title from 'antd/lib/typography/Title'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu';


const { Sider } = Layout;

export default class MenuSide extends React.Component {
  render() {
    return (
      <Sider>
        <Menu
          defaultSelectedKeys={['dashboard']}
          mode="inline"
        >
          <Menu.Item key='dashboard'>
            Dashboard
            <Link to="/dashboard" />
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <AreaChartOutlined />
                <span>Drivers</span>
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key='driver1' icon={<BarChartOutlined />}>
                <span>Driver 1</span>
                <Link to="/driver/1" />
              </Menu.Item>
              <Menu.Item key='driver2' icon={<BarChartOutlined />}>
                <span>Driver 2</span>
                <Link to="/driver/2" />
              </Menu.Item>
              <Menu.Item key='driver3' icon={<BarChartOutlined />}>
                <span>Driver 3</span>
                <Link to="/driver/3" />
              </Menu.Item>
              <Menu.Item key='driver4' icon={<BarChartOutlined />}>
                <span>Driver 4</span>
                <Link to="/driver/4" />
              </Menu.Item>
              <Menu.Item key='driver5' icon={<BarChartOutlined />}>
                <span>Driver 5</span>
                <Link to="/driver/5" />
              </Menu.Item>
              <Menu.Item key='driver6' icon={<BarChartOutlined />}>
                <span>Driver 6</span>
                <Link to="/driver/6" />
              </Menu.Item>
              <Menu.Item key='driver7' icon={<BarChartOutlined />}>
                <span>Driver 7</span>
                <Link to="/driver/7" />
              </Menu.Item>
              <Menu.Item key='driver8' icon={<BarChartOutlined />}>
                <span>Driver 8</span>
                <Link to="/driver/8" />
              </Menu.Item>
              <Menu.Item key='driver9' icon={<BarChartOutlined />}>
                <span>Driver 9</span>
                <Link to="/driver/9" />
              </Menu.Item>
              <Menu.Item key='driver10' icon={<BarChartOutlined />}>
                <span>Driver 10</span>
                <Link to="/driver/10" />
              </Menu.Item>
              <Menu.Item key='driver11' icon={<BarChartOutlined />}>
                <span>Driver 11</span>
                <Link to="/driver/11" />
              </Menu.Item>
              <Menu.Item key='driver12' icon={<BarChartOutlined />}>
                <span>Driver 12</span>
                <Link to="/driver/12" />
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

// export default Head;