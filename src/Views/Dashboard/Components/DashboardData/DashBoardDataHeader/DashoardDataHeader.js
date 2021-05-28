import React from "react";

class DashoardDataHeader extends React.Component{
    render() {
        return(
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">One</p>
                        <p className="subtitle">Subtitle</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Two</p>
                        <p className="subtitle">Subtitle</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Three</p>
                        <p className="subtitle">Subtitle</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Four</p>
                        <p className="subtitle">Subtitle</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default DashoardDataHeader;