import React, { useContext } from 'react';
import { CreateEventContext } from '../../Providers/CreateEventProvider';
import EventImage from "./Components/EventImage/EventImage";
import EventDetails from "./Components/EventDetails/EventDetails";
import ReviewEvent from "./Components/ReviewEvent/ReviewEvent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faImages, faEdit, faReceipt} from '@fortawesome/free-solid-svg-icons';
import EventInfo from "./Components/EventInfo/EventInfo";

fontawesome.library.add(faImages, faEdit, faReceipt);

function getStepContent(step, NexventUser) {
    switch (step) {
        case 0:
            return <EventImage/>;
        case 1:
            return <EventInfo/>;
        case 2:
            return <EventDetails/>;
        case 3:
            return <ReviewEvent/>;
        default:
            throw new Error('Unknown step');
    }
}

const CreateEvent = () => {
    const { activeStep, steps} = useContext(CreateEventContext);

    return (
        <div>
            <ul className="steps is-horizontal is-medium has-gaps has-content-centered mt-6">
                {activeStep === 0 ? (
                <li className="steps-segment is-active" >
                        <span className="steps-marker">
                            <span className="icon">
                               <FontAwesomeIcon icon={"images"}/>
                            </span>
                        </span>
                        <div className="steps-content">
                            <p className="heading">Upload Image</p>
                        </div>
                </li>
                ) : (
                    <li className="steps-segment" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"images"}/>
                            </span>
                        </span>
                            <div className="steps-content">
                                <p className="heading">Upload Image</p>
                            </div>
                    </li>
                 )
                }
                {activeStep === 1 ? (
                    <li className="steps-segment is-active" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"edit"}/>
                            </span>
                        </span>
                            <div className="steps-content">
                                <p className="heading">Event Info</p>
                            </div>
                    </li>
                ) : (
                    <li className="steps-segment" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"edit"}/>
                            </span>
                        </span>
                            <div className="steps-content">
                                <p className="heading">Event Info</p>
                            </div>
                    </li>
                )
                }
                {activeStep === 2 ? (
                    <li className="steps-segment is-active" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"receipt"}/>
                            </span>
                        </span>
                            <div className="steps-content">
                                <p className="heading">Event Details</p>
                            </div>
                    </li>
                ) : (
                    <li className="steps-segment" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"receipt"}/>
                            </span>
                        </span>
                            <div className="steps-content">
                                <p className="heading">Event Details</p>
                            </div>
                    </li>
                )
                }
                {activeStep === 3 ? (
                    <li className="steps-segment is-active" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"receipt"}/>
                            </span>
                        </span>
                        <div className="steps-content">
                            <p className="heading">Review Details</p>
                        </div>
                    </li>
                ) : (
                    <li className="steps-segment" >
                        <span className="steps-marker">
                            <span className="icon">
                                <FontAwesomeIcon icon={"receipt"}/>
                            </span>
                        </span>
                        <div className="steps-content">
                            <p className="heading">Review Details</p>
                        </div>
                    </li>
                )
                }
            </ul>
            <React.Fragment>
                {activeStep === steps.length ? (
                    <React.Fragment>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                            {getStepContent(activeStep)}
                    </React.Fragment>
                )}
            </React.Fragment>
        </div>
    );
};

export default CreateEvent;

CreateEvent.propTypes = {};