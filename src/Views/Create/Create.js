import React from 'react';
import SideNavigationBar from "../../Components/SideNavigationBar";
import CreateEvent from "./CreateEvent";

const Create = () => {
    return(
        <div className="columns">
            <SideNavigationBar/>
            <div className="column ml-3 mb-5 is-four-fifths">
                <div className="tile is-ancestor mt-3 mr-5 ">
                    <div className="tile is-parent  box">
                        <article className="tile is-child">
                            <p className="title">Create Event</p>
                        </article>
                    </div>
                </div>
                <div className="tile is-ancestor mt-3 mr-5 ">
                    <div className="tile is-parent  box">
                        <article className="tile is-child">
                            <CreateEvent/>
                        </article>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Create