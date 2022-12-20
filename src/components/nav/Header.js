import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";

const { SubMenu, Item } = Menu;

const Header = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) =>({...state}))
  const history = useHistory()
  const [current, setCurrent] = useState("users");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "LOGOUT",
      payload: null
    })
    history.push("/login")
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="welcome" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      {user&&<Item key="users" icon={<AppstoreOutlined />}>
        <Link to="/users">Users</Link>
      </Item>}

      {!user&& <Item key="register" icon={<UserAddOutlined />} className="text-right">
        <Link to="/register">Register</Link>
      </Item>}

      {!user && <Item key="login" icon={<UserOutlined />} className="text-right">
        <Link to="/login">Login</Link>
      </Item>}

      {user&&<SubMenu icon={<SettingOutlined />} title={user.email && user.email.split("@")[0]}className="text-right">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item icon={<UserOutlined />} onClick={logout}>Logout</Item>
      </SubMenu>}
    </Menu>
  );
};

export default Header;
