import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../../../../common/modal/Modal';
import EventCard from '../../../../common/event-card/EventCard';
import ModalDialog from '../../../../common/modal/dialog/ModalDialog';

export default function LastActivities({ getEventsByUser, userId, events, deleteEventById }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  useEffect(() => {
    getEventsByUser(userId);
  }, [getEventsByUser, userId]);

  const history = useHistory();
  const handleClick = (event) => history.push(`/profile/edit-event/${ event._id }`);
  const handleDeleteClick = (id) => {
    setEventToDelete(id);

    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);

    setEventToDelete(null);
  }

  const handleYesClick = () => {
    deleteEventById(eventToDelete);

    handleCloseModal();
  }

  return (
    <>
      <ul className="main-page__events">
        {events.map((event) => (
          <EventCard
            event={event}
            key={event._id}
            btnTitle="Edit"
            btnIcon="edit"
            onClick={() => handleClick(event)}
            deleteEvent={() => handleDeleteClick(event._id)}
          />
        ))}
      </ul>

      {modalOpen && <Modal
        heading="Delete this event?"
        handleCloseModal={handleCloseModal}
        component={
          <ModalDialog
            onYes={handleYesClick}
            onNo={handleCloseModal}
          />
        }
      />
      }
    </  >
  )
}
