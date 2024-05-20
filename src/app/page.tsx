"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 0,
        label: `Home`,
        path: "/"
    },
    {
        key: 1,
        label: `About`,
        path: "/about"
    },
];

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                {/*TODO: Create a navbar that can navigate to other pages and appear in the top of all pages*/}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ flex: 1, minWidth: 0 }}
                >
                    {items.map((page) => <Menu.Item key={page.key}><Link href={page.path}>{page.label}</Link></Menu.Item>)}
                </Menu>
            </Header>
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;
