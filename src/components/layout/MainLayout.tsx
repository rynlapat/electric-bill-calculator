"use client"

import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";

const { Content } = Layout;

const MainLayout = ({children}: React.PropsWithChildren) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <MainHeader />
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
                        alignItems: "center",
                    }}
                >
                    {children}
                </div>
            </Content>
            <MainFooter />
        </Layout>
    );
};

export default MainLayout;
