import React from 'react';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import SubMenu from 'antd/lib/menu/SubMenu';
import { AreaChartOutlined } from '@ant-design/icons';
// import Chart from "./Chart";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import RadarComp from "./RadarComp";


const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
        {/* <Avatar shape="square" size={64} icon={<UserOutlined />} /> */}
        <Avatar style={{float:'left'}} shape="square" src='./favicon.ico' />
        <Avatar style={{float:'right'}} icon={<UserOutlined />} />
        <Title style={{color:'white'}} level={3}>⠀AI Value</Title>
      </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['dashboard']}
              mode="inline"
            >
              <Menu.Item key='dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <AreaChartOutlined  />
                    {/* <Icon type="mail" /> */}
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup title='Drivers'>
                  <Menu.Item key='driver1'>Driver 1</Menu.Item>
                  <Menu.Item key='driver2'>Driver 2</Menu.Item>
                  <Menu.Item key='driver3'>Driver 3</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div site-layout-content style={{ background: '#fff', padding:24, minHeight:580}}>
                <div className="site-card-border-less-wrapper">
                  <Card title="Card title" bordered={false} style={{ width: 200 }}>
                    <RadarComp />
                  </Card>
                </div>
                
              </div>
              {/* <div className="site-layout-content">Content</div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Dàbái</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
