import React from "react";

class DashBoardDataFooter extends React.Component{
    render() {
        return(
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">One</p>
                        <p className="subtitle">Subtitle</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default DashBoardDataFooter;