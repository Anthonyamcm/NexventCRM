import React from "react";

class DashBoardDataContent extends React.Component {
    render() {
        return(
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-9">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Five</p>
                                <p className="subtitle">Subtitle</p>
                                <div className="content">
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Seven</p>
                        <p className="subtitle">Subtitle</p>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default DashBoardDataContent;