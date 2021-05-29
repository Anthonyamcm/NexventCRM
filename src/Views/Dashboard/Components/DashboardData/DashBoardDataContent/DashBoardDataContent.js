import React from "react";
import DashBoardDataContentSectionOne from "./DashBoardDataContentSectionOne/DashBoardDataContentSectionOne";
import DashBoardDataContentSectionTwo from "./DashBoardDataContentSectionTwo/DashBoardDataContentSectionTwo";

class DashBoardDataContent extends React.Component {
    render() {
        return(
            <div className="tile is-ancestor">
                <DashBoardDataContentSectionOne/>
                <DashBoardDataContentSectionTwo/>
            </div>
        )
    }
}

export default DashBoardDataContent;