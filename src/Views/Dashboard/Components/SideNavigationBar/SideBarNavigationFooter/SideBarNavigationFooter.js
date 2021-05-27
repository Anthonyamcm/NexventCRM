import React from "react";


class SideBarNavigationFooter extends React.Component {
    render() {
        return(
            <div className="tile is-ancestor has-background-danger-light mt-6 ml-5 mr-5 ">
                <div className="tile p-5">
                    <a className="button" href="/">Log Out</a>
                </div>
            </div>
        )
    }
}

export default SideBarNavigationFooter;