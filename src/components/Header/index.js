/*
 * File: index.js
 * Project: template
 * Description:
 * Created By: Tao.Hu 2019-09-10
 * -----
 * Last Modified: 2019-09-10 05:19:42 pm
 * Modified By: Tao.Hu
 * -----
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  // Breadcrumb,
  Icon,
  Button,
} from 'antd';

import './index.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menuButtonClass = {
  lineHeight: '64px',
  height: '64px',
  fontSize: '1em',
  fontWeight: '500',
  float: 'right',
};

function BaseHeader(props) {
  const [collapsed, setCollapsed] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { content } = props;

  return (
    <Layout>
      <Header className="header">
        <span className="logo">
          React Template Logo
        </span>
        {/* 如果需要横向靠右菜单，打开下面注释 */}
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', float: 'right', background: '#018E7B' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
        <span>
          <Button
            type="primary"
            icon="logout"
            className="menu-button"
            style={menuButtonClass}
            // onClick={this.onLogout}
          >
            退出
          </Button>
          <Button
            type="primary"
            icon="user"
            style={menuButtonClass}
          >
            温经理
          </Button>
        </span>
      </Header>
      <Layout>
        <Sider
          // collapsedWidth={64} there has a bug
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <Link to="/home" style={{ display: 'inline' }}>NVR主机</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <Link to="/about" style={{ display: 'inline' }}>报警主机</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={(
                <span>
                  <Icon type="user" />
                  <span>管理</span>
                </span>
              )}
            >
              <Menu.Item key="3">用户</Menu.Item>
              <Menu.Item key="4">日志</Menu.Item>
              <Menu.Item key="5">设置</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BaseHeader;
