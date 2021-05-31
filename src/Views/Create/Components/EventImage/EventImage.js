import React, {useCallback, useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {CreateEventContext} from '../../../../Providers/CreateEventProvider';
import NextPageButton from "../../../../Components/NextPageButton/NextPageButton";

fontawesome.library.add(faUpload);

const EventImage = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [step1ImageDetails, setStep1ImageDetails] = useState({
        eventImageURL: '',
        eventImageName: '',
    })

    const [step1Details, setStep1Details] = useState({
        eventTitle: '',

    })

    const { step1Context, setStep1Context, handleNext, handleBack, NexventUser, imageContext, setImageContext } = useContext(
        CreateEventContext,
    );

    const step1RequireFields = ['eventTitle'];

    const nextStepperHandler = () => {
        setStep1Context(step1Details);
        setImageContext(step1ImageDetails);
        handleNext();
    };

    const previousStepperHandler = () => {
        handleBack();
    };

    const handleChange = (event) => {
        setStep1Details({
            ...step1Details,
            [event.target.name]: event.target.value,
        });
    };

    const step1NotComplete = useCallback(() => {
        return step1RequireFields.some(
            (requireFiled) => step1Details[requireFiled] === '',
        );
    }, [step1RequireFields, step1Details]);

    useEffect(() => {
        if (!step1NotComplete()) {
            setButtonDisabled(false);
        }
    }, [step1NotComplete, setStep1Context, step1Details]);

    useEffect(() => {
        if (step1Context) {
            setStep1Details(step1Context);
        }
        if(imageContext){
            setStep1ImageDetails(imageContext);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onChangePicture = e => {
        setStep1ImageDetails({
           eventImageURL: URL.createObjectURL(e.target.files[0]),
           eventImageName: e.target.files[0].name
       })
    };

        return(
            <div className="columns is-centered is-full p-6 is-desktop">
                <div className="column pr-6 is-two-fifths">
                    <form className="form form-wrapper">
                        <div className="field pt-0">
                            <label className="label">Event Title</label>
                            <div className="control">
                                <input className="input" value={step1Details.eventTitle} required type="text" onChange={handleChange} placeholder="e.g Manic Mondays" name="eventTitle"/>
                            </div>
                        </div>
                        <div className="file has-name field mt-6 pt-0">
                            <label className="file-label">
                                <input className="file-input" required type="file" onChange={onChangePicture} name="eventImageURL"/>
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <FontAwesomeIcon icon={faUpload}/>
                                        </span>
                                        <span className="file-label">
                                                Upload File
                                        </span>
                                        </span>
                                         <span className="file-name">
                                             {step1ImageDetails.eventImageName === '' ? 'Placeholder': step1ImageDetails.eventImageName}
                                         </span>
                                     </label>
                               </div>
                        <NextPageButton buttonDisabled={buttonDisabled}
                                        handleNext={nextStepperHandler}
                                        handleBack={previousStepperHandler}
                        />
                    </form>
                </div>
                <div className="divider is-vertical"></div>
                <div className="column is-two-fifths">
                    <div className=" image-container ml-6  box is-centered" style={{ backgroundImage: `url(${step1ImageDetails.eventImageURL})` }}>
                        <div className={"event-footer pb-3 pt-2 "}>
                            <p className={"pl-3 has-text-white title is-3"}>{step1Details.eventTitle === '' ? 'Placeholder' : step1Details.eventTitle}</p>
                            <p className={"pl-3 has-text-white subtitle is-5"}></p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default EventImage