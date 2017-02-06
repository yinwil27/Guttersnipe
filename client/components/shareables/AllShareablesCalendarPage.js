import React, {PropTypes} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import {connect} from 'react-redux';
import {fetchAllShareables} from '../../actions/shareables/shareableActions';
import {Link} from 'react-router';

class ShareableListPage extends React.Component {
  constructor(props) {
    super(props);
    this.calculateCenter = this.calculateCenter.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllShareables();
  }

  calculateCenter(shareables) {
    return [40.693922, -73.991764];
  }

  renderMarker(shareable) {
    const position = [shareable.space.latitude,
      shareable.space.longitude];
    const headline = shareable.headline;
    const id = shareable.id;
    return(
      <Marker key={`marker${id}`} position={position}>
        <Popup key={`popup${id}`}>
          <h2> {headline}</h2>
          <Link to={"/shareables/shareable/" + id}> Full Record </Link>
        </Popup>
      </Marker>
    )

  }

  render() {
    const {
      shareables: {
        isFetchingShareables,
        shareableFetchError, items, selectedIndex
      }
    }  = this.props;


    if (isFetchingShareables || !items || items.length < 1) {
      return <div>Loading...</div>;
    }

    const position = this.calculateCenter(items);

     const markers = [
    [51.505, -0.09],
    [51.605, -0.09],
    [51.705, -0.09],
    [51.805, -0.09],
  ].map((position, i) => (
    <Marker key={`marker${ i }`} position={position}>
      <Popup>
        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
      </Popup>
    </Marker>
  ));

    return (
      <div>
        <Map center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers}
          {items.map(shareable => this.renderMarker(shareable))}
        </Map>
      </div>
    )
  }
}

ShareableListPage.propTypes = {
  shareables: PropTypes.object.isRequired,
  fetchAllShareables: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    shareables: state.shareables
  };
}

export default connect(mapStateToProps, {fetchAllShareables})(ShareableListPage);

/*
import React, {PropTypes, Component} from 'react';

import moment from 'moment';
import RRule from 'rrule';
import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

const EventCalendarView = ({headline, viewMonth,
  handleSelectSlot, handleNavigation,
  selectable, calendarEvents}) => {

  const transformToRRule = (recurringGenerator) => {
    const daysToRRule = (days) => {
      return days.split(',').map(day => {
        switch (day) {
          case 'su':  return RRule.SU;
          case 'mo':  return RRule.MO;
          case 'tu':  return RRule.TU;
          case 'we':  return RRule.WE;
          case 'th':  return RRule.TH;
          case 'fr':  return RRule.FR;
          case 'sa':  return RRule.SA;
        }
      });
    };

    const freqToRRule = (freq) => {
      switch (freq) {
        case 'yearly':  return RRule.YEARLY;
        case 'monthly':  return RRule.MONTHLY;
        case 'weekly':  return RRule.WEEKLY;
        case 'daily':  return RRule.DAILY;
      }
    };

    return new RRule({
      freq: freqToRRule(recurringGenerator.recurrence_rule.freq),
      dtstart: new Date(recurringGenerator.dt_start),
      byweekday: daysToRRule(recurringGenerator.recurrence_rule.byDay)
    });
  };

  const calculateAllEvents = () => {
    const ev = calendarEvents.reduce((accumulator, event) => {
      if (event.recurrence_rule) {
        return accumulator.concat(transformToRRule(event).between(
          moment(viewMonth).startOf('month').subtract(7, 'days').toDate(),
          moment(viewMonth).endOf('month').add(7, 'days').toDate()
        ).map(occurance => {
          return {
            title: headline,
            start: occurance,
            end: new Date(occurance.getTime() +
              new Date(event.dt_end).getTime() -
              new Date(event.dt_start).getTime())
          };
        }));
      } else {
        return accumulator.concat({
          start: new Date(event.dt_start),
          end: new Date(event.dt_end),
          title: headline
        });
      }
    }, []);
    return ev;
  };

  return (
    <div style={{height: "400px"}}>
      <BigCalendar
        className="calendar"
        timeslots={4}
        events={calculateAllEvents()}
        onNavigate ={handleNavigation}
        onSelectSlot={handleSelectSlot}
        selectable={selectable} />
    </div>
  );
};

EventCalendarView.propTypes = {
  headline: PropTypes.string.isRequired,
  calendarEvents: PropTypes.array.isRequired,
  viewMonth: PropTypes.object,
  handleNavigation: PropTypes.func.isRequired,
  handleSelectSlot: PropTypes.func,
  selectable: PropTypes.bool
};

export default EventCalendarView;

 */