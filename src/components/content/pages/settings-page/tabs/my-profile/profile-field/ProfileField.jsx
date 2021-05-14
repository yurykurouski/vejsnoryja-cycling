import React from 'react'

export default function ProfileField({ title, value }) {
  return (
    <span className="my-profile__field-wrap">
      <span className="my-profile__field-title">{title}</span>
      <span className="my-profile__field-value">{value}</span>
    </span>
  )
}
