import React from "react";
import DashoardDataHeader from "./DashBoardDataHeader/DashoardDataHeader";
import DashBoardDataContent from "./DashBoardDataContent/DashBoardDataContent";
import DashBoardDataFooter from "./DashBoardDataFooter/DashBoardDataFooter";

class DashboardData extends React.Component{
    render() {


        return (
        <div className="column pr-5 pt-5 pb-5 is-four-fifths">
            <DashoardDataHeader/>
            <DashBoardDataContent/>
            <DashBoardDataFooter/>
        </div>
        )

    }
}

export default DashboardData;