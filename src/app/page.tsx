import MainLayout from "@/components/layout/MainLayout";
import HomeSection from "@/containers/home-page/home-section";
import React from "react";

const App: React.FC = () => {
    return (
        <MainLayout>
            <HomeSection />
        </MainLayout>
    );
};

export default App;
