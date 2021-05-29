import React from "react";
import SideNavigationBarHeader from "./SideNavigationBarHeader/SideNavigationBarHeader";
import SideBarNavigationButton from "./SideNavigationBarButton/SideBarNavigationButton";
import SideBarNavigationMenu from "./SideBarNavigationMenu/SideBarNavigationMenu";

const SideNavigationBar = () => {
    return(
            <div className="box hero column is-one-fifth is-fullheight ">
                <SideNavigationBarHeader/>
                <SideBarNavigationButton/>
                <SideBarNavigationMenu/>
            </div>
    )
}
export default SideNavigationBar;