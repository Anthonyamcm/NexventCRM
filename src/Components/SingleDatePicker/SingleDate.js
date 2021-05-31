import React from "react";
import 'react-dates/initialize';
import {ANCHOR_LEFT, HORIZONTAL_ORIENTATION, OPEN_DOWN, SingleDatePicker, SingleDatePickerPhrases} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import PropTypes from "prop-types";
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import SingleDatePickerShape from "react-dates/src/shapes/SingleDatePickerShape";
import isInclusivelyAfterDay from "react-dates/esm/utils/isInclusivelyAfterDay";

const propTypes = {
    // example props for the demo
    autoFocus: PropTypes.bool,
    initialDate: momentPropTypes.momentObj,

    ...omit(SingleDatePickerShape, [
        'date',
        'onDateChange',
        'focused',
        'onFocusChange',
    ]),
};

const defaultProps = {
    // example props for the demo
    autoFocus: false,
    initialDate: null,

    // input related props
    id: 'date',
    placeholder: 'Select Date',
    disabled: false,
    required: false,
    screenReaderInputMessage: '',
    showClearDate: false,
    showDefaultInputIcon: false,
    customInputIcon: null,
    block: false,
    small: false,
    regular: false,
    verticalSpacing: undefined,
    keepFocusOnInput: false,
    noBorder: false ,

    // calendar presentation and interaction related props
    renderMonthText: null,
    orientation: HORIZONTAL_ORIENTATION,
    anchorDirection: ANCHOR_LEFT,
    horizontalMargin: 0,
    withPortal: false,
    withFullScreenPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 1,
    keepOpenOnDateSelect: false,
    reopenPickerOnClearDate: false,
    isRTL: false,
    openDirection: OPEN_DOWN,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},
    onClose() {},

    // day presentation and interaction related props
    renderCalendarDay: undefined,
    renderDayContents: null,
    enableOutsideDays: false,
    isDayBlocked: () => false,
    isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    isDayHighlighted: () => {},


    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY',
    phrases: SingleDatePickerPhrases,
};

class SingleDate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            date: props.initialDate,
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ date });
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }

    render()
    {
        const { focused, date } = this.state;

        // autoFocus and initialDate are helper props for the example wrapper but are not
        // props on the SingleDatePicker itself and thus, have to be omitted.
        const props = omit(this.props, [
            'autoFocus',
            'initialDate',
        ]);


        return(
        <SingleDatePicker
            {...props}
            id="date_input"
            date={date}
            focused={focused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
        />
        )
    }
}

SingleDate.propTypes = propTypes;
SingleDate.defaultProps = defaultProps;

export default SingleDate;
