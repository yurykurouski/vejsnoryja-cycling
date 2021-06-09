import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../../../../common/modal/Modal';
import EventCard from '../../../../common/event-card/EventCard';
import ModalDialog from '../../../../common/modal/dialog/ModalDialog';
import { deleteEventById, userInOutEvent } from '../../../../../store/events/actions';

function LastActivities({
  userId,
  events,
  deleteEventById,
  currentUserId,
  userInOutEvent,
  userName,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const history = useHistory();
  const handleClick = (event) => history.push(`/profile/edit-event/${ event._id }`);
  const handleDeleteClick = (id) => {
    setEventToDelete(id);

    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);

    setEventToDelete(null);
  };

  const handleYesClick = () => {
    deleteEventById(eventToDelete);

    handleCloseModal();
  };

  return (
    <>
      <ul className="main-page__events">
        {events.map((event) => {
          const match = event.whosIn.find((user) => user.userId === currentUserId);

          if (event.author === userId) {
            if (currentUserId === userId) {
              return (
                <EventCard
                  event={event}
                  key={event._id}
                  btnTitle="Edit"
                  btnIcon="edit"
                  onClick={() => handleClick(event)}
                  deleteEvent={() => handleDeleteClick(event._id)}
                />
              );
            }
            return (
              <EventCard
                event={event}
                key={event._id}
                btnTitle={match ? "I'm Out" : "I'm In"}
                btnIcon={match ? 'remove_done' : 'done_outline'}
                onClick={() => userInOutEvent({ eventId: event._id, userName })}
              />
            );
          } return null;
        })}
      </ul>

      {modalOpen && <Modal
        heading="Delete this event?"
        handleCloseModal={handleCloseModal}
      >
        <ModalDialog
          onYes={handleYesClick}
          onNo={handleCloseModal}
        />
      </Modal>}
    </>
  );
}

LastActivities.defaultProps = {
  userName: undefined,
};

LastActivities.propTypes = {
  userId: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEventById: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  userInOutEvent: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    deleteEventById: (id) => dispatch(deleteEventById(id)),
    userInOutEvent: (data) => dispatch(userInOutEvent(data)),
  };
}

export default connect(mapDispatchToProps)(LastActivities);
