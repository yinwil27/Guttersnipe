import React, {PropTypes, Component} from 'react';
import EventCalendarView from './EventCalendarView';

class EventCalendarNavigable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMonth: props.viewMonth
        };
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(date) {
        this.setState({
            viewMonth: date
        });
    }

    render() {
        return (
            <EventCalendarView
                headline={this.props.headline}
                viewMonth={this.state.viewMonth}
                calendarEvents={this.props.calendarEvents}
                handleSelectSlot={this.props.handleSelectSlot}
                handleNavigation={this.handleNavigation}
                selectable={this.props.selectable}
            />
        );
    }
}

EventCalendarNavigable.propTypes = {
    headline: PropTypes.string.isRequired,
    calendarEvents: PropTypes.array.isRequired,
    viewMonth: PropTypes.object,
    handleSelectSlot: PropTypes.func,
    selectable: PropTypes.bool
};

export default EventCalendarNavigable;