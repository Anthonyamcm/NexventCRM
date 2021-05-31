import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CreateEventContext } from '../../Providers/CreateEventProvider';

const NextPageButton = ({ buttonDisabled, handleNext, handleBack }) => {
    const { activeStep, steps } = useContext(CreateEventContext);
    return (
        <div>
            {activeStep !== 0 && (
                <button onClick={handleBack} className={"button is-primary has-text-white mt-3"}>
                    Back
                </button>
            )}
            <button
                variant='contained'
                color='primary'
                onClick={handleNext}
                disabled={buttonDisabled}
                className={"button is-primary has-text-white mt-3 ml-3"}>
                {activeStep === steps.length - 1 ? 'Submit Event' : 'Next'}
            </button>
        </div>
    );
};

export default NextPageButton;

NextPageButton.propTypes = {
    handleNext: PropTypes.func,
    buttonDisabled: PropTypes.bool,
    handleBack: PropTypes.func,
    activeStep: PropTypes.number,
    steps: PropTypes.array,
};
