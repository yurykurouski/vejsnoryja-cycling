import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './user-profile.css';

import UserGear from "./gear/UserGear";
import Tabs from "../../../common/tabs/Tabs";
import EventPage from '../../../common/event-page/EventPage';
import ProfileFields from '../../../../constants/profile-fields';
import LastActivities from './last-activities/LastActivities';
import { logoutUser } from '../../../../store/current-user/actions';
import { getEventsByUser, updateEventById } from '../../../../store/events/actions';

function UserProfile(props) {
  const { logoutUser, events, status, currentUser, updateEventById, getEventsByUser } = props;
  const eventID = useRouteMatch('/profile/edit-event/:eventID')?.params.eventID;

  useEffect(() => {
    getEventsByUser();
  }, [getEventsByUser]);

  return (
    <Switch>
      <>
        {
          eventID
            ? <Route exact path="/profile/edit-event/:eventID">
              <EventPage
                event={events.find(event => event._id === eventID)}
                currentUser={currentUser}
                saveEvent={updateEventById}
              />
            </Route>

            : <div className="content__user-profile first-layer-card">
              <span className="user-profile__header">
                <h2 className="user-profile__heading card-heading">Your profile</h2>
                <button onClick={logoutUser} className="user-profile__logout-btn submit-btn sign-out-btn">Sign out</button>
              </span>

              <div className="user-profile__main second-layer-card">

                <Tabs tabs={ProfileFields.PROFILE_TABS} />

                <Route exact path="/profile">
                  <Redirect to="/profile/last-activities" />
                </Route>

                <Route exact path="/profile/last-activities">
                  <LastActivities
                    events={events}
                    status={status}
                    getEventsByUser={getEventsByUser}
                  />
                </Route>

                <Route exact path="/profile/gear">
                  <UserGear />
                </Route>
              </div>
            </div>
        }
      </>
    </Switch>
  )
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    currentUser: state.currentUser.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getEventsByUser: () => dispatch(getEventsByUser()),
    updateEventById: (data) => dispatch(updateEventById(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
