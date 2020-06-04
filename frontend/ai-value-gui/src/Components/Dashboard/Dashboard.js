import React from 'react';
// import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import { UserOutlined, BarChartOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import SubMenu from 'antd/lib/menu/SubMenu';
import { AreaChartOutlined } from '@ant-design/icons';
import { Link, Route, Switch } from "react-router-dom";
// import Chart from "./Chart";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Row, Col } from "reactstrap";
import RadarComp from "./Charts/Radar/RadarChart";

import Head from '../Layouts/Head';
import MenuSide from '../Layouts/MenuSide';

const { Header, Footer, Sider, Content } = Layout;


function Dashboard() {

  return (
    <div className="App">
      <Layout>
        <Head />
        <Layout>
          <MenuSide />
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>⠀</Breadcrumb.Item>
              </Breadcrumb>
              <div site-layout-content style={{ background: '#fff', padding: 48, minHeight: 580 }}>
                <RadarComp />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Dàbái</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;