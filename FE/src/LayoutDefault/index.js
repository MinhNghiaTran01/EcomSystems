/* eslint-disable no-unused-vars */
import { Layout, Flex,Button,Collapse,Image,Table } from "antd";
import {Outlet} from 'react-router-dom'
import {MenuUnfoldOutlined,SearchOutlined,BellOutlined,AppstoreOutlined,UserOutlined} from '@ant-design/icons'
import logo from '../images/logo.png';
import { useContext, useEffect, useState } from "react";
import DropDownNotify from './DropDownNotify'
import MenuSider from "../components/MenuSider";
import {Link,useLocation} from 'react-router-dom'
import './style.scss';
import Title from "../context/title";
const {Footer, Sider, Content } = Layout;
const items = [
  {
    key: 1,
    label: 'Content 1',
    children: 'Content'
  },
  {
    key: 2,
    label: 'Content 2',
    children: 'Content'
  },
  {
    key: 3,
    label: 'Content 3',
    children: 'Content'
  }
]

function LayoutDefault() {
  const [collapsed,setCollapsed] = useState(false);
  const {title,setTitle} = useContext(Title)
  const location = useLocation();
  

  return (
    
    <Layout className="layout-default">
      <header className="header">
        <Link to="/">
          <div className={"header__logo " + (collapsed && "header__logo-collapsed")}>
            <img src={collapsed ? logo : logo} alt="anh loi"/>
          </div>
        </Link>
        <div className="header__nav">
          <div className="header__nav-left"> 
            <div className="header__collapse" onClick={ () => {
              setCollapsed(!collapsed);
            }}>
              <Button className="header__menu-fold" icon={<MenuUnfoldOutlined />}></Button>
            </div>
          </div>
          
          <div className="header__nav-center"> 
            <h1>{title}</h1>
          </div>
          
          <div className="header__nav-right"> 
            <div className="header__bell">
              <Button type="primary"><UserOutlined /></Button>
            </div>
          </div>
        </div>
      </header>
      
      <Layout>
        <Sider width={"280px"} theme="light" collapsed={collapsed}>
          <MenuSider />
        </Sider>
        <Content className="content">
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}
export default LayoutDefault;
