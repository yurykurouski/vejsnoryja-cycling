import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import Tabs from '../../common/tabs/Tabs';
import Loader from '../../common/loader/Loader';
import InfoSection from './info-section/InfoSection';
import EventPage from '../../common/event-page/EventPage';
import LastActivities from './last-activities/LastActivities';
import { getUserInfo } from '../../../store/user-info/actions';
import { getUserActiveGear } from '../../../store/gear/actions';
import { logoutUser } from '../../../store/current-user/actions';
import ActionStatus from '../../../constants/store/action-status';
import ProfileFields from '../../../constants/components-fields/profile-fields';
import { getAllEvents, updateEventById } from '../../../store/events/actions';

import './user-profile.css';

function UserProfile({
  events,
  status,
  gear,
  userInfo,
  currentUserId,
  logoutUser,
  getUserInfo,
  getUserActiveGear,
  updateEventById,
  getEventsByUser,
}) {
  const eventID = useRouteMatch('/profile/edit-event/:eventID')?.params.eventID;
  const userId = useRouteMatch('/profile/:userId')?.params.userId;
  const [eventsQuanity, setEventsQuanity] = useState(INITIAL_EVENTS_NUMBER_ON_PAGE);

  useEffect(() => {
    getUserActiveGear(userId);
    getUserInfo(userId);
  }, [userId]);

  useEffect(() => {
    getEventsByUser({ userId, eventsQuanity });
  }, []);

  const fetchMoreData = () => {
    setEventsQuanity(eventsQuanity + INITIAL_EVENTS_NUMBER_ON_PAGE);
  };
  return (
    <Switch>
      <>
        {eventID
          ? <Route exact path="/profile/edit-event/:eventID">
            <EventPage
              event={events.find((event) => event._id === eventID)}
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
              <button
                onClick={logoutUser}
                type="button"
                className="user-profile__logout-btn submit-btn sign-out-btn"
              >
                Sign out
              </button>
            </span>

            <div className="user-profile__main">

              <Tabs tabs={ProfileFields.PROFILE_TABS(userId)} />

              <div className="user-profile__tab-content-wrap">
                <Route path="/profile/:userId">
                  <Redirect to={`/profile/${ userId }/last-activities`} />
                </Route>

                <Route exact path="/profile/:userId/last-activities">
                  {(events.length === 0 && status === ActionStatus.LOADING)
                    ? <Loader />
                    : <InfiniteScroll
                        className="main-page__events"
                        dataLength={events.length}
                        next={fetchMoreData}
                        hasMore
                    >
                      <LastActivities
                        userId={userId}
                        events={events}
                        currentUserId={currentUserId}
                        userName={userInfo.Name}
                      />
                    </InfiniteScroll>}

                </Route>

                <Route exact path="/profile/:userId/info">
                  <div className="profile-information-wrap first-layer-card">
                    <InfoSection
                      info={userInfo}
                      title={ProfileFields.INFORMATION_SUBTITLE_INFO()}
                    />
                    <InfoSection
                      info={gear[0]}
                      title={ProfileFields.INFORMATION_SUBTITLE_GEAR()}
                    />
                  </div>
                </Route>
              </div>
              {status === ActionStatus.LOADING && <Loader />}
            </div>
          </div>}
      </>
    </Switch>
  );
}

UserProfile.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  gear: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  userInfo: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  getUserActiveGear: PropTypes.func.isRequired,
  updateEventById: PropTypes.func.isRequired,
  getEventsByUser: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    events: state.events.events,
    status: state.events.status,
    gear: state.gear.gear,
    gearStatus: state.gear.status,
    userInfo: state.userInfo.userInfo,
    currentUserId: state.currentUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
    updateEventById: (data) => dispatch(updateEventById(data)),
    getUserActiveGear: (id) => dispatch(getUserActiveGear(id)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    getEventsByUser: (query) => dispatch(getEventsByUser(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
