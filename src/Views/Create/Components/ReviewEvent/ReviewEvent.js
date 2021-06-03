import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faClock, faMapMarker, faUpload} from "@fortawesome/free-solid-svg-icons";
import NextPageButton from "../../../../Components/NextPageButton/NextPageButton";
import {CreateEventContext} from "../../../../Providers/CreateEventProvider";
import moment from "moment";

const ReviewEvent = () => {

const{
    step1Context,
    step2Context,
    step3Context,
    imageContext,
    addressContext,
    handleNext,
    handleBack,
} = useContext(CreateEventContext);


        return(
            <div className="columns is-centered is-full p-6 is-desktop">
                <div className={'column'}/>
                <div className="column">
                    <div className=" image-container mr-6 box is-centered" style={{ backgroundImage: `url(${imageContext.eventImageURL})` }}>
                        <div className={"event-footer pb-3 pt-2 "}>
                            <p className={"pl-3 has-text-white title is-3"}>{step1Context.eventTitle === '' ? 'Placeholder' : step1Context.eventTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="divider is-vertical"/>
                <div className="column is-half">
                    <div className=" image-container ml-6 box is-centered">
                        <img src={imageContext.eventImageURL} className={'image-head'}/>
                        <div className={'event-details'}>
                            <p className={"pl-4 pt-5 title is-4"}>{step1Context.eventTitle}</p>
                            <div className="columns is-multiline">
                                <div className="column is-full pl-2 pb-0 pr-0">
                                <span className="icon-text is-align-items-center pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMapMarker}/>
                                </span>
                                <p className="pl-1 is-multiline is-customSize">{addressContext.label}</p>
                                </span>
                                </div>
                                <div className="column is-full pl-2 pt-2 pb-0">
                                <span className="icon-text pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCalendarAlt}/>
                                    </span>
                                    {step2Context.eventType === "single" && < span className="pl-1 is-customSize">{moment(step2Context.selectedDates).format('Do MMMM YYYY')}</span>
                                    }
                                    {step2Context.eventType === "multi" && < span className="pl-1 is-customSize">{moment(step2Context.selectedDates[0]).format('Do MMMM YYYY')} - {moment(step2Context.selectedDates[1]).format('Do MMM YYYY')}</span>
                                    }
                                </span>
                                </div>
                                <div className="column is-full pl-2 pt-2 pb-0">
                                <span className="icon-text pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faClock}/>
                                </span>
                                <span className="pl-1 is-customSize">{step2Context.startTime} - {step2Context.endTime}</span>
                                </span>
                                </div>
                                <div className="column is-full pl-5 pr-5 pt-2 pb-0">

                                    {step3Context.tags.length < 1 ? (

                                        <span className="tag is-primary ml-1 mr-1 mt-2">Placeholder</span>

                                    ) : step3Context.tags.map(({label}, index) =>

                                        <span className="tag is-primary ml-1 mr-1 mt-2" key={index}>{label}</span>
                                    )
                                    }
                                </div>
                                <div className="column is-full pl-5 pr-5 pt-4 pb-0">
                                    <div className ="field">
                                        <div className="control">
                                            <textarea className="textarea has-fixed-size has-background-match is-customSize" placeholder="Description will go here" defaultValue={step3Context.eventDescription} disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ReviewEvent