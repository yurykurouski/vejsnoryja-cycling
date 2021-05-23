import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';
import './user-profile.css';

import UserGear from "./gear/UserGear";
import Tabs from "../../../common/tabs/Tabs";
import EventPage from '../../../common/event-page/EventPage';
import profileFields from '../../../../constants/profile-fields';
import LastActivities from './last-activities/LastActivities';
import { logoutUser } from '../../../../store/current-user/actions';
import { getEventsByUser, updateEventById } from '../../../../store/events/actions';
import { getUserActiveGear } from '../../../../store/gear/actions';
import Loader from '../../../common/loader/Loader';
import ActionStatus from '../../../../constants/action-status';

function UserProfile(props) {
  const { logoutUser, events, gear, eventsStatus, gearStatus, updateEventById, getUserActiveGear, getEventsByUser } = props;
  const eventID = useRouteMatch('/profile/edit-event/:eventID')?.params.eventID;
  const userId = useRouteMatch('/profile/:userId')?.params.userId;

  return (
    <Switch>
      <>
        {
          eventID
            ? <Route exact path="/profile/edit-event/:eventID">
              <EventPage
                event={events.find(event => event._id === eventID)}
                currentUser={userId}
                saveEvent={updateEventById}
              />
            </Route>

            : <div className="content__user-profile first-layer-card">
              <span className="user-profile__header">
                <h2 className="user-profile__heading card-heading">Your profile</h2>
                <button onClick={logoutUser} className="user-profile__logout-btn submit-btn sign-out-btn">Sign out</button>
              </span>

              <div className="user-profile__main second-layer-card">

                <Tabs tabs={profileFields.PROFILE_TABS(userId)} />

                <div className="user-profile__tab-content-wrap">
                  <Route path="/profile/:userId">
                    <Redirect to={`/profile/${ userId }/last-activities`} />
                  </Route>

                  <Route exact path="/profile/:userId/last-activities">
                    <LastActivities
                      getEventsByUser={getEventsByUser}
                      userId={userId}
                      events={events}
                    />
                  </Route>

                  <Route exact path="/profile/:userId/gear">
                    <UserGear
                      getUserActiveGear={getUserActiveGear}
                      userId={userId}
                      gear={gear}
                    />
                  </Route>
                </div>
              </div>
            </div>
        }
        {(eventsStatus === ActionStatus.LOADING || gearStatus === ActionStatus.LOADING) && <Loader />}
      </>
    </Switch>
  )
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    eventsStatus: state.events.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getEventsByUser: (id) => dispatch(getEventsByUser(id)),
    updateEventById: (data) => dispatch(updateEventById(data)),
    getUserActiveGear: (id) => dispatch(getUserActiveGear(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
