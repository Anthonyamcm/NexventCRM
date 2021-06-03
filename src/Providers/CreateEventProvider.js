import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CreateEvent } from '../Firebase/Database/Database';
import { AuthContext } from './AuthProvider';

export const CreateEventContext = React.createContext();

const steps = [
    'Image',
    'Info',
    'Details',
    'Review Event',
];

export const CreateEventProvider = ({ children }) => {
    const [step1Context, setStep1Context] = useState(null);
    const [step2Context, setStep2Context] = useState(null);
    const [step3Context, setStep3Context] = useState(null);
    const [step4Context, setStep4Context] = useState(null);
    const [imageContext, setImageContext] = useState(null);
    const [addressContext, setAddressContext] = useState(null);

    const getDatesInTimeStamp = (selectedDates) => {
        return selectedDates.map((date) => {
            return {
                ...date,
                timestamp: date.date.getTime(),
            };
        });
    };

    const { NexventUser } = useContext(AuthContext);

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const createDatabaseObject = () => {
        const EventObject = {
            ...step1Context,
            ...step2Context,
            ...step3Context,
            ...step4Context,
            ...imageContext,
            ...addressContext,

        };
        EventObject.selectedDates = getDatesInTimeStamp(EventObject.selectedDates);


        return EventObject;
    };

    const submitEventHandler = () => {
        const Event = createDatabaseObject();

        CreateEvent(Event, NexventUser)
            .then(() => {
                setActiveStep(activeStep + 1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <CreateEventContext.Provider
            value={{
                NexventUser,
                step1Context,
                setStep1Context,
                step2Context,
                setStep2Context,
                step3Context,
                setStep3Context,
                step4Context,
                setStep4Context,
                imageContext,
                setImageContext,
                addressContext,
                setAddressContext,
                submitEventHandler,
                handleNext,
                handleBack,
                activeStep,
                steps,
            }}>
            {children}
        </CreateEventContext.Provider>
    );
};

CreateEventProvider.propTypes = {
    children: PropTypes.node,
};
