import React from 'react';
import SideNavigationBar from "../../Components/SideNavigationBar";
import CreateBody from "./CreateBody/CreateBody";

const Create = () => {
    return(
        <div className="columns">
            <SideNavigationBar/>
            <div className="column ml-3 mr-5 mb-5 is-four-fifths box">
                <div className="tile is-ancestor ">
                    <div className="tile is-parent mt-3">
                        <article className="tile is-child">
                            <p className="title">Create Event</p>
                        </article>
                    </div>
                </div>
            </div>
            <CreateBody/>
        </div>
    );
};

export default Create