import React from "react";

class SideBarNavigationButton extends React.Component
{
    render() {
        return(
            <div className="tile is-ancestor has-background-info-light mt-6 ml-5 mr-5 ">
                <div className="tile p-4">
                    <div className="columns">
                        <p className="column is-four-fifths is-size-5">Create New Event</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default SideBarNavigationButton