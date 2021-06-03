import React, {useCallback, useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faCalendarAlt, faClock, faMapMarker, faUpload} from '@fortawesome/free-solid-svg-icons';
import {CreateEventContext} from '../../../../Providers/CreateEventProvider';
import NextPageButton from "../../../../Components/NextPageButton/NextPageButton";
import Select from 'react-select'
import moment from "moment";


fontawesome.library.add(faClock, faCalendarAlt,faMapMarker, faUpload);




const EventDetails = () => {

    useEffect(() => {
        if (step3Context) {
            setStep3Details(step3Context);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [buttonDisabled, setButtonDisabled] = useState(true), [step3Details, setStep3Details] = useState({
        eventDescription: '',
        tags: [],

    }), {
        step3Context,
        setStep3Context,
        step1Context,
        step2Context,
        imageContext,
        addressContext,
        handleNext,
        handleBack,
        NexventUser,
    } = useContext(CreateEventContext),nextStepperHandler = () => {
        setStep3Context(step3Details);
        handleNext();
    }, previousStepperHandler = () => {
        handleBack();
    }, handleChange = (event) => {
        setStep3Details({
            ...step3Details,
            [event.target.name]: event.target.value,
        });
    }, setValue = (selectedOptions) => {
        selectedOptions.map( selectedOption =>
            setStep3Details({
                ...step3Details, tags: selectedOptions
            })
        );
        ;
        console.log(step3Details)
    }, {tags, eventDescription} = step3Details;

    const step3RequireFields = ['eventDescription', 'tags'];

    const step3NotComplete = useCallback(() => {
        return step3RequireFields.some(
            (requireFiled) => step3Details[requireFiled] === '',
        );

    }, [step3RequireFields, step3Details]);

    useEffect(() => {
        if (!step3NotComplete()) {
            setButtonDisabled(false);
        }
    }, [step3NotComplete, setStep3Context, step3Details]);


    const options = [
        { value: 'festival', label: 'Festival' },
        { value: 'performance', label: 'Performance' },
        { value: 'fair', label: 'Fair' },
        { value: 'drag', label: 'Drag' },
        { value: 'show', label: 'Show' },

    ]
    return(
        <div className="columns is-centered is-full p-6 is-desktop">
            <div className="column pr-6 is-two-fifths">
                <form className="form form-wrapper">
                    <div className ="field">
                        <label className="label">Tags</label>
                        <div className="control">
                            <Select options={options} name={'tags'} value={step3Details.tags.label} isMulti onChange={setValue}/>
                        </div>
                    </div>
                    <div className ="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea has-fixed-size" onChange={handleChange} placeholder="Description of event, can include prices etc " name='eventDescription'/>
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

                                {step3Details.tags.length < 1 ? (

                                        <span className="tag is-primary ml-1 mr-1 mt-2">Placeholder</span>

                                ) : step3Details.tags.map(({label}, index) =>

                                    <span className="tag is-primary ml-1 mr-1 mt-2" key={index}>{label}</span>
                                )
                                }
                            </div>
                            <div className="column is-full pl-5 pr-5 pt-4 pb-0">
                                <div className ="field">
                                    <div className="control">
                                        <textarea className="textarea has-fixed-size has-background-match is-customSize" placeholder="Description will go here" defaultValue={step3Details.eventDescription} disabled/>
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

export default EventDetails;