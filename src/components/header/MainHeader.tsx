import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const items = [
    {
        key: 0,
        label: `Home`,
        path: "/",
    },
    {
        key: 1,
        label: `About`,
        path: "/about",
    },
];

const MainHeader: React.FC = () => {
    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            {/*TODO: Create a navbar that can navigate to other pages and appear in the top of all pages*/}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} style={{ flex: 1, minWidth: 0 }}>
                {items.map((page) => (
                    <Menu.Item key={page.key}>
                        <Link href={page.path}>{page.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
}

export default MainHeader;
