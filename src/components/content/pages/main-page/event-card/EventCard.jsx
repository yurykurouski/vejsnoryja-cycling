import React from 'react'

export default function EventCard({event}) {
  return (
    <div className="main-page__events">
      {event.title}
    </div>
  )
}

