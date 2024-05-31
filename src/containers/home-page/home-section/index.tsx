"use client";

import React, { useEffect, useState } from "react";
import HomeInfoSection from "../info-section";
import { Flex, InputNumber, Layout, Button } from "antd";
import { Typography } from "antd";
import { electricCalculate } from "@/utils/calculator";

const { Title, Text } = Typography;
const { Content } = Layout;

const HomeSection: React.FC = () => {
    const [energyFee, setEnergyFee] = useState<number | null>(null);
    const [mainHouse, setMainHouse] = useState<number | null>(null);
    const [subHouse, setSubHouse] = useState<number | null>(null);
    const [serviceFee, setServiceFee] = useState<number | null>(null);
    const [ftCharge, setFtCharge] = useState<number | null>(null);
    const [vatFee, setVatFee] = useState<number | null>(null);

    const [mainHouseRes, setMainHouseRes] = useState<number>(0);
    const [subHouseRes, setSubHouseRes] = useState<number>(0);

    const handleOnClickCalculate = () => {
        const { mainHouseBill, subHouseBill } = electricCalculate(
            energyFee as number,
            mainHouse as number,
            subHouse as number,
            serviceFee as number,
            ftCharge as number,
            vatFee as number
        );
        setMainHouseRes(mainHouseBill);
        setSubHouseRes(subHouseBill);
    };

    return (
        <Content
            style={{
                padding: "2rem",
                borderRadius: "50px",
                background: "#ffffff",
                boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
            }}
        >
            <Title style={{ textAlign: "center" }}>Electric Bill Calculator</Title>
            <Flex gap="middle" justify="space-evenly" style={{ marginTop: "3rem" }}>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่าพลังงานไฟฟ้า</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={energyFee}
                        onChange={(val: number | null) => setEnergyFee(val)}
                        size="large"
                        placeholder="Energy fee"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่าหน่วยไฟรวม</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={mainHouse}
                        onChange={(val: number | null) => setMainHouse(val)}
                        size="large"
                        placeholder="หน่วย kWh"
                        suffix="kWh"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่าหน่วยไฟบ้านเล็ก</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={subHouse}
                        onChange={(val: number | null) => setSubHouse(val)}
                        size="large"
                        placeholder="หน่วย kWh"
                        suffix="kWh"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่าบริการ</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={serviceFee}
                        onChange={(val: number | null) => setServiceFee(val)}
                        size="large"
                        placeholder="Service fee (All)"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่า ft</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={ftCharge}
                        onChange={(val: number | null) => setFtCharge(val)}
                        size="large"
                        placeholder="FT (All)"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical>
                    <Text style={{ fontSize: "24px" }}>ค่า vat</Text>
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        value={vatFee}
                        onChange={(val: number | null) => setVatFee(val)}
                        size="large"
                        placeholder="VAT fee (All)"
                        controls={false}
                    />
                </Flex>
                <Flex gap="middle" vertical justify="center" align="center">
                    <Button type="primary" style={{padding: "24px 32px", display: "flex" ,alignItems: "center", fontSize: "1rem" }} onClick={handleOnClickCalculate}>
                        Calculate
                    </Button>
                </Flex>
            </Flex>
            <Flex gap="middle" justify="space-evenly" style={{ marginTop: "3rem" }}>
                <Flex
                    gap="middle"
                    vertical
                    justify="center"
                    align="center"
                    style={{
                        padding: "48px",
                    }}
                >
                    <Text style={{ fontSize: "32px" }}>ค่าไฟบ้านหลัก</Text>
                    <Text style={{ fontSize: "48px", fontWeight: 600 }}>
                        {`${mainHouseRes} `}&asymp;{` ${mainHouseRes.toFixed(2)}`}
                    </Text>
                </Flex>
                <Flex
                    gap="middle"
                    vertical
                    justify="center"
                    align="center"
                    style={{
                        padding: "48px",
                    }}
                >
                    <Text style={{ fontSize: "32px" }}>ค่าไฟบ้านรอง</Text>
                    <Text style={{ fontSize: "48px", fontWeight: 600 }}>
                        {`${subHouseRes} `}&asymp;{` ${subHouseRes.toFixed(2)}`}
                    </Text>
                </Flex>
            </Flex>
        </Content>
    );
};

export default HomeSection;
