import React, {useContext, useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faCalendarAlt, faClock, faMapMarker, faUpload} from '@fortawesome/free-solid-svg-icons';
import {CreateEventContext} from '../../../../Providers/CreateEventProvider';
import NextPageButton from "../../../../Components/NextPageButton/NextPageButton";
import SingleDate from "../../../../Components/SingleDatePicker/SingleDate";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


fontawesome.library.add(faClock, faCalendarAlt,faMapMarker, faUpload);




const EventInfo = () => {



    const [place, setPlace] = useState(null);



    useEffect(() => {
        if (step2Context) {
            setStep2Details(step2Context);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true), [step2Details, setStep2Details] = useState({
        eventAddress: null,
        eventDate:[],
        eventTime:[]

    }), {
        step2Context,
        setStep2Context,
        step1Context,
        imageContext,
        handleNext,
        handleBack,
        NexventUser,
    } = useContext(CreateEventContext), step2RequireFields = ['eventTitle'], nextStepperHandler = () => {

        step2Context(step2Details);
        handleNext();
    }, previousStepperHandler = () => {
        handleBack();
    }, handleChange = (event) => {
        setStep2Details({
            ...step2Details,
            [event.target.name]: event.target.value,
        });
        console.log(step2Details.eventAddress)
    }, {eventAddress, eventDate, eventTime} = step2Details;

    return(
        <div className="columns is-centered is-full p-6 is-desktop">
            <div className="column pr-6 is-two-fifths">
                <form className="form form-wrapper">
                    <div className="field pt-0">
                        <label className="label">Location</label>
                        <div className="control">
                            <GooglePlacesAutocomplete apiKey="AIzaSyDB3m9IgLnTqEBC-GxuHeuAHjSkyyJZwKw"
                                                      selectProps={{
                                                          value: place,
                                                          onChange: setPlace,
                                                          isClearable: true
                                                      }}
                                                      minLengthAutocomplete={3}
                                                      autocompletionRequest={{ componentRestrictions: { country:["UK"], }, types: ['geocode'], }}
                                                      name={'eventAddress'}
                            />
                        </div>
                    </div>
                    <div className="field pt-0">
                        <label className="label">Date</label>
                        <div className="control">
                            <SingleDate/>
                        </div>
                    </div>
                    <NextPageButton buttonDisabled={buttonDisabled}
                                    handleNext={nextStepperHandler}
                                    handleBack={previousStepperHandler}
                    />
                </form>
            </div>
            <div className="divider is-vertical"></div>
            <div className="column is-two-fifths">
                <div className=" image-container ml-6 box is-centered">
                    <img src={imageContext.eventImageURL} className={'image-head'}/>
                    <div className={'event-details'}>
                        <p className={"pl-4 pt-5 title is-4"}>{step1Context.eventTitle === '' ? 'Placeholder' : step1Context.eventTitle}</p>
                        <div className="columns is-multiline">
                            <div className="column is-full pl-2 pb-0 pr-0">
                                <span className="icon-text is-align-items-center pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMapMarker}/>
                                </span>
                                <p className="pl-1 is-multiline is-customSize">{place === null ? 'Placeholder,Placeholder' : place.label}</p>
                                </span>
                            </div>
                            <div className="column is-full pl-2 pt-2 pb-0">
                                <span className="icon-text pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faCalendarAlt}/>
                                    </span>
                                    <span className="pl-1 is-customSize">31st November 2021 - 31st November 2021</span>
                                </span>
                            </div>
                            <div className="column is-full pl-2 pt-2 pb-0">
                                <span className="icon-text pl-4">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faClock}/>
                                </span>
                                <span className="pl-1 is-customSize">00:00 AM - 00:00 AM</span>
                                </span>
                            </div>
                            <div className="column is-full pl-5 pr-5 pt-2 pb-0">
                                    <span className="tag is-primary ml-1 mr-1 mt-2">Placeholder</span>
                            </div>
                            <div className="column is-full pl-5 pr-5 pt-4 pb-0">
                                <div className ="field">
                                    <div className="control">
                                        <textarea className="textarea has-fixed-size has-background-match is-customSize" placeholder="Description will go here" defaultValue={step2Details.eventDescription} disabled/>
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

export default EventInfo