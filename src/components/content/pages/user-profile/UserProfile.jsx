import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Tabs from '../../../common/tabs/Tabs';
import Loader from '../../../common/loader/Loader';
import InfoSection from './info-section/InfoSection';
import EventPage from '../../../common/event-page/EventPage';
import LastActivities from './last-activities/LastActivities';
import { getUserInfo } from '../../../../store/user-info/actions';
import { getUserActiveGear } from '../../../../store/gear/actions';
import { logoutUser } from '../../../../store/current-user/actions';
import ActionStatus from '../../../../constants/store/action-status';
import profileFields from '../../../../constants/components-fields/profile-fields';
import { deleteEventById, updateEventById, userInOutEvent } from '../../../../store/events/actions';

import './user-profile.css';

function UserProfile(props) {
  const { logoutUser,
    events,
    gear,
    eventsStatus,
    gearStatus,
    updateEventById,
    getUserActiveGear,
    getUserInfo,
    userInfo,
    currentUserId,
    deleteEventById,
    userInOutEvent
  } = props;

  const eventID = useRouteMatch('/profile/edit-event/:eventID')?.params.eventID;
  const userId = useRouteMatch('/profile/:userId')?.params.userId;

  useEffect(() => {
    getUserActiveGear(userId);
  }, [getUserActiveGear, userId]);

  useEffect(() => {
    getUserInfo(userId);
  }, [getUserInfo, userId]);

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
                <h2 className="user-profile__heading card-heading">
                  {currentUserId === userId
                    ? 'Your profile'
                    : `${ userInfo.Name }'s profile`}
                </h2>
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
                      deleteEventById={deleteEventById}
                      userId={userId}
                      events={events}
                      currentUserId={currentUserId}
                      userInOutEvent={userInOutEvent}
                      userName={userInfo.Name}
                    />
                  </Route>

                  <Route exact path="/profile/:userId/info">
                    <div className="profile-information-wrap first-layer-card">
                      <InfoSection
                        info={userInfo}
                        title={profileFields.INFORMATION_SUBTITLE_INFO()}
                      />
                      <InfoSection
                        info={gear}
                        title={profileFields.INFORMATION_SUBTITLE_GEAR()}
                      />
                    </div>
                  </Route>
                </div>
              </div>
            </div>
        }
        {(eventsStatus === ActionStatus.LOADING || gearStatus === ActionStatus.LOADING) && <Loader />}
      </>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
    eventsStatus: state.events.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
    userInfo: state.userInfo.userInfo,
    currentUserId: state.currentUser.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    updateEventById: (data) => dispatch(updateEventById(data)),
    getUserActiveGear: (id) => dispatch(getUserActiveGear(id)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    deleteEventById: (id) => dispatch(deleteEventById(id)),
    userInOutEvent: (data) => dispatch(userInOutEvent(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
