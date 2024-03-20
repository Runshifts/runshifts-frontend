

///:organizationId/accept-all"/:organizationId/accept-all"
const MY_SHIFTS_URLS = {
  acceptAll: (organizationId) => `/shifts/${organizationId}/accept-all`,
  apply: (organizationId, shiftId) => `/shifts/${organizationId}/${shiftId}/apply`,
}
export default MY_SHIFTS_URLS
