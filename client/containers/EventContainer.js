import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Events from '../components/Events';
import {createEvent, deleteEvent, getAllEvents} from '../actions/event';

import isEmpty from 'lodash/isEmpty';
import ReactTransitionGroup from 'react-addons-css-transition-group';


export class EventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date  : '',
      time  : '',
      title      : '',
      description   : '',
      dirty      : false,
      wobbleError: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.wobbler = this.wobbler.bind(this);
  }

  componentWillReceiveProps(props, nextProps) {
    if (!isEmpty(props.loggedInUser)) {
      this.props.router.push('/boards');
    }
  }
  componentDidMount() {
    this.props.onEventEnter();

  }
  submitForm(e) {
    e.preventDefault();
    this.props.creatingEvent(this.state.date,
    this.state.time, this.state.title, this.state.description)
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  wobbler() {
    this.setState({wobbleError: 'hvr-wobble-horizontal'});

    setTimeout(() => {
      this.setState({wobbleError: ''});
    }, 1000);
  }

  render() {
    const dirty = this.state.dirty;
    let warning = '';

    // if (dirty && this.state.type === 'login') {
    //   warning = 'Password or Email is Invalid';
    // } else if (dirty && this.state.type === 'signup') {
    //   warning = 'Username or Email is Unavailable';
    // }

    return (
      <ReactTransitionGroup
      transitionName="slideIn"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <div>
            <Events submitForm={this.submitForm}
                    handleInput={this.handleInput}
                    warning={warning}
                    wobbler={this.wobbler}
                    wobbleError={this.state.wobbleError}
                    events={this.props.events}
                    type={this.state.type}
                    deleteEvent={this.props.deleteEvent}/>
        </div>
    </ReactTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
});

const mapDispatchToProps = (dispatch) => {
  return {
    creatingEvent: function(date, time, title, description) {
      dispatch(createEvent(date, time, title, description));
    },
    onEventEnter: function() {
      dispatch(getAllEvents({}));
    },
    deleteEvent: function(eventId) {
      dispatch(deleteEvent(eventId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
