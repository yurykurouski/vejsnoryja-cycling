export default class ProfileFields{
  static get PROFILE_TABS() {
    return [
      {
        to: '/profile/last-activities',
        name: 'Last activities'
      },
      {
        to: '/profile/gear',
        name: 'Your gear'
      }
    ]
  }
}