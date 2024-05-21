import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter: React.FC = () => {
    return <Footer style={{ textAlign: "center" }}>© {new Date().getFullYear()} Copyright: Khim&Joe</Footer>;
};

export default MainFooter;
