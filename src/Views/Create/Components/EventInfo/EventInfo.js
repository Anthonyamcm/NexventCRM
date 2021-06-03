import React, {useCallback, useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faCalendarAlt, faClock, faMapMarker, faUpload} from '@fortawesome/free-solid-svg-icons';
import {CreateEventContext} from '../../../../Providers/CreateEventProvider';
import NextPageButton from "../../../../Components/NextPageButton/NextPageButton";
import moment from 'moment';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import  { SingleDatePicker } from 'react-dates';






fontawesome.library.add(faClock, faCalendarAlt,faMapMarker, faUpload);




const EventInfo = () => {

    //date range picker
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = React.useState();
    const [focusedInput, setFocusedInput] = React.useState();

    //single day picker
    const [date, setDate] = useState();
    const [focused, setFocused] = useState(false);



    const [place, setPlace] = useState(null);


    useEffect(() => {
        if (step2Context) {
            setStep2Details(step2Context)
            if(step2Details.eventType === 'single'){
                setDate(selectedDates)
            }else{
                setStartDate(step2Details.selectedDates[0])
                setEndDate(step2Details.selectedDates[1])
            }
        };
        if(addressContext){
            setPlace(addressContext);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [buttonDisabled, setButtonDisabled] = useState(true), [step2Details, setStep2Details] = useState({
        eventType: '',
        eventRecurring: '',
        eventAge: '',
        selectedDates: [],
        startTime: '',
        endTime: '',

}), {
            step2Context,
            setStep2Context,
            step1Context,
            imageContext,
            addressContext,
            setAddressContext,
            handleNext,
            handleBack,
        } = useContext(CreateEventContext), nextStepperHandler = () => {
            setAddressContext(place)
            setStep2Context(step2Details);
            handleNext();
        }, previousStepperHandler = () => {
            handleBack();
        }, handleChangeEvent = (event) => {
        setStep2Details({
            ...step2Details,
            [event.target.name]: event.target.value,
        });
        console.log(step2Details)
    },{eventAddress, eventType, eventRecurring,  selectedDates, startTime, endTime} = step2Details;


    const step2RequireFields = ['eventAddress', 'eventType', 'eventRecurring', 'eventAge', 'selectedDates' , 'startTime', 'endTime'];

    const step2NotComplete = useCallback(() => {
        return step2RequireFields.some(
            (requireFiled) => step2Details[requireFiled] === '',
        );

    }, [step2RequireFields, step2Details]);

    useEffect(() => {
        if (!step2NotComplete()) {
            setButtonDisabled(false);
        }
    }, [step2NotComplete, setStep2Context, step2Details]);



    return<div className="columns is-centered is-full p-6 is-desktop">
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
                                                  autocompletionRequest={{ componentRestrictions: { country:["UK"]}, types: ['geocode'],  }}
                                                  />
                    </div>
                </div>
                <div className={'columns is-centered is-full pt-5 pl-3 pr-3 pb-0'}>
                <div className="field column  p-0">
                    <label className="label">Day</label>
                    <div className="control">
                        <span className="select">
                                    <select name={'eventType'} onChange={handleChangeEvent} value={step2Details.eventType}>
                                        <option>Select</option>
                                        <option value="single">Single</option>
                                        <option value="multi">Multiple</option>
                                    </select>
                                </span>
                    </div>
                </div>
                <div className="field column p-0">
                    <label className="label">Recurring</label>
                    <div className="control">
                        <span className="select">
                                    <select name={'eventRecurring'} onChange={handleChangeEvent} value={step2Details.eventRecurring}>
                                        <option>select</option>
                                        <option value="no">No</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </span>
                    </div>
                </div>
                    <div className="field column p-0">
                    <label className="label">Age</label>
                    <div className="control">
                        <span className="select">
                                    <select name={'eventAge'} onChange={handleChangeEvent } value={step2Details.eventAge}>
                                        <option>select</option>
                                        <option value="all">All</option>
                                        <option value="3+">3+</option>
                                        <option value="13+">12+</option>
                                        <option value="16+">16+</option>
                                        <option value="18+">18+</option>
                                    </select>
                                </span>
                    </div>
                </div>
                </div>
                {eventType === 'single' && <div className={'columns is-centered is-full pt-4 pl-1 pr-3 pb-0'}>
                    <div className="field pt-0 pl-2">
                        <label className="label">Date</label>
                        <div className="control">
                            <SingleDatePicker
                                date={date}
                                onDateChange={(date) => {
                                    setDate(date);
                                    var date = moment(date).toDate()
                                    setStep2Details({
                                        ...step2Details,selectedDates: [date]})
                                }}
                                focused={focused}
                                onFocusChange={({ focused }) => setFocused(focused)}
                                id="date"
                                numberOfMonths={1}
                                displayFormat="DD MMM YYYY"
                            />
                        </div>
                    </div>
                        {date !== '' && <div className="field column pt-0 pl-5">
                                <label className="label">Start Time</label>
                                <div className="control">
                                    <input type={'time'} name={'startTime'} onChange={handleChangeEvent}  value={step2Details.startTime}/>
                                </div>
                            </div>}
                        {date !== '' && <div className="field column pt-0">
                                <label className="label">End Time</label>
                                <div className="control">
                                    <input type={'time'} name={'endTime'} onChange={handleChangeEvent}  value={step2Details.endTime}/>
                                </div>
                            </div>}
                        <div className="field column p-0"/>
                    </div>
                }
                {eventType === "multi" && <div className={'columns is-centered is-full pt-4 pl-3 pr-3 pb-0'}>
                    <div className="field pt-0 pr-4">
                        <label className="label">Dates</label>
                        <div className="control">
                            <DateRangePicker
                                startDatePlaceholderText="Start"
                                endDatePlaceholderText="End"
                                numberOfMonths={1}
                                displayFormat="DD MMM YYYY"
                                startDate={startDate}
                                startDateId="start-date"
                                endDate={endDate}
                                endDateId="end-date"
                                onDatesChange={({ startDate, endDate }) => {
                                    setStartDate(startDate);
                                    setEndDate(endDate);
                                    var sDate = moment(startDate).toDate()
                                    var eDate = moment(endDate).toDate()
                                    setStep2Details({
                                        ...step2Details,selectedDates: [sDate, eDate]})
                                }}
                                focusedInput={focusedInput}
                                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                                minimumNights={0}
                            />
                        </div>
                    </div>
                        <div className="field column p-0">
                            <label className="label">Start Time</label>
                            <div className="control">
                                <input type={'time'} name={'startTime'} onChange={handleChangeEvent} value={step2Details.startTime}/>
                            </div>
                        </div>
                        <div className="field column pt-0">
                            <label className="label">End Time</label>
                            <div className="control">
                                <input type={'time'} name={'endTime'} onChange={handleChangeEvent} value={step2Details.endTime}/>
                            </div>

                        </div>
                    </div>
                }
                <NextPageButton buttonDisabled={buttonDisabled}
                                handleNext={nextStepperHandler}
                                handleBack={previousStepperHandler}/>
            </form>
        </div>
        <div className="divider is-vertical"/>
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
                                {eventType === "" && < span className="pl-1 is-customSize">1 Jan 2021</span>

                                }
                                {eventType === "single" && < span className="pl-1 is-customSize">{date === '' ? "1st Jan 2021" : moment(date).format('Do MMMM YYYY')}</span>
                                }
                                {eventType === "multi" && < span className="pl-1 is-customSize">{startDate === '' ? "1st Jan 2021" : moment(startDate).format('Do MMMM YYYY')} - {endDate === '' ? "1 Jan 2021" : moment(endDate).format('Do MMMM YYYY')}</span>
                                }
                            </span>
                        </div>
                        <div className="column is-full pl-2 pt-2 pb-0">
                            <span className="icon-text pl-4">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faClock}/>
                            </span>
                            <span className="pl-1 is-customSize">{startTime === '' ? '00:00' : startTime} - {endTime === '' ? '00:00' : endTime}</span>
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
}

export default EventInfo;