import React from "react";
import DashBoardDataHeaderSectionOne from "./DashBoardDataHeaderSectionOne/DashBoardDataHeaderSectionOne";
import DashBoardDataHeaderSectionTwo from "./DashBoardDataHeaderSectionTwo/DashBoardDataHeaderSectionTwo";
import DashBoardDataHeaderSectionThree from "./DashBoardDataHeaderSectionThree/DashBoardDataHeaderSectionThree";
import DashBoardDataHeaderSectionFour from "./DashBoardDataHeaderSectionFour/DashBoardDataHeaderSectionFour";


class DashoardDataHeader extends React.Component{
    render() {
        return(
            <div className="tile is-ancestor">
                <DashBoardDataHeaderSectionOne/>
                <DashBoardDataHeaderSectionTwo/>
                <DashBoardDataHeaderSectionThree/>
                <DashBoardDataHeaderSectionFour/>
            </div>
        )
    }
}

export default DashoardDataHeader;