import React from "react";
import DashoardDataHeader from "./DashBoardDataHeader/DashoardDataHeader";
import DashBoardDataContent from "./DashBoardDataContent/DashBoardDataContent";
import DashBoardDataFooter from "./DashBoardDataFooter/DashBoardDataFooter";

class DashboardData extends React.Component{
    render() {


        return (
        <div className="column pr-5 pt-5 pb-5 is-four-fifths">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <p className="title">Dashboard</p>
                        <p className="subtitle is-4" >Nexure</p>
                    </article>
                </div>
            </div>
            <DashoardDataHeader/>
            <DashBoardDataContent/>
            <DashBoardDataFooter/>
        </div>
        )

    }
}

export default DashboardData;