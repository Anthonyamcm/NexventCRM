import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faTachometerAlt, faUser, faCreditCard, faSlidersH, faEquals} from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faTachometerAlt, faUser, faCreditCard, faSlidersH, faEquals);

class SideBarNavigationMenu extends React.Component{
    render() {
        return(
            <div className="columns is-multiline mt-6">
                <div className="column is-full pb-4">
                 <a href="/Dashboard" className="pl-5 is-size-5">
                     <span className="icon-text">
                            <span className="icon">
                                <FontAwesomeIcon icon={"tachometer-alt"}/>
                            </span>
                         <span className="pl-2">Dashboard</span>
                    </span>
                 </a>
                </div>
                <div className="column is-full pb-4">
                    <a href="/Dashboard"className="pl-5 is-size-5" ><span className="icon-text">
                            <span className="icon">
                                <FontAwesomeIcon icon={"equals"}/>
                            </span>
                         <span className="pl-2">Events</span>
                    </span>
                    </a>
                </div>
                <div className="column is-full pb-4">
                    <a href="/Dashboard"className="pl-5 is-size-5" ><span className="icon-text">
                            <span className="icon">
                                <FontAwesomeIcon icon={"credit-card"}/>
                            </span>
                         <span className="pl-2">Billing</span>
                    </span>
                    </a>
                </div>
                <div className="column is-full pb-4">
                    <a href="/Dashboard" className="pl-5 is-size-5"><span className="icon-text">
                            <span className="icon">
                                <FontAwesomeIcon icon={"user"}/>
                            </span>
                         <span className="pl-2">Account</span>
                    </span></a>
                </div>
                <div className="column is-full pb-4">
                    <a href="/Dashboard" className="pl-5 is-size-5"><span className="icon-text">
                            <span className="icon">
                                <FontAwesomeIcon icon={"sliders-h"}/>
                            </span>
                         <span className="pl-2">Settings</span>
                    </span></a>
                </div>
            </div>
        )
    }
}

export default SideBarNavigationMenu