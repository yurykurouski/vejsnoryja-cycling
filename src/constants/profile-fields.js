class ProfileFields {
  PROFILE_TABS(userId) {
    return [
      {
        to: `/profile/${ userId }/last-activities`,
        name: 'Last activities'
      },
      {
        to: `/profile/${ userId }/gear`,
        name: 'Your gear'
      }
    ]
  }
}

const profileFields = new ProfileFields();

export default profileFields;