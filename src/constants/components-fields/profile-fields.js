class ProfileFields {
  static PROFILE_TABS(userId) {
    return [
      {
        to: `/profile/${userId}/last-activities`,
        name: 'Last activities'
      },
      {
        to: `/profile/${userId}/info`,
        name: 'Information'
      }
    ];
  }

  static INFORMATION_SUBTITLE_INFO() {
    return 'Info';
  }

  static INFORMATION_SUBTITLE_GEAR() {
    return 'Gear';
  }
}

const profileFields = new ProfileFields();

export default profileFields;
