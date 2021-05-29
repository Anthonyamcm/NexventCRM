import React from 'react';
import SideNavigationBar from "../../Components/SideNavigationBar";
import DashboardData from "./Components/DashboardData/DashboardData";

const Dashboard = () => {
    return(
        <div className="columns">
        <SideNavigationBar/>
        <DashboardData/>
        </div>
    );
};

export default Dashboard