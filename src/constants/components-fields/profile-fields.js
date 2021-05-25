class ProfileFields {
  PROFILE_TABS(userId) {
    return [
      {
        to: `/profile/${ userId }/last-activities`,
        name: 'Last activities'
      },
      {
        to: `/profile/${ userId }/info`,
        name: 'Information'
      }
    ]
  }

  INFORMATION_SUBTITLE_INFO() {
    return 'Info'
  }

  INFORMATION_SUBTITLE_GEAR() {
    return 'Gear'
  }
}

const profileFields = new ProfileFields();

export default profileFields;