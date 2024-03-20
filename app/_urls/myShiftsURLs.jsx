///:organizationId/accept-all"/:organizationId/accept-all"
const MY_SHIFTS_URLS = {
  acceptAll: (organizationId) => `/shifts/${organizationId}/accept-all`,
  apply: (organizationId, shiftId) =>
    `/shifts/${organizationId}/${shiftId}/apply`,
  accept: (shiftId) => `/shifts/${shiftId}/accept`,
  dropOff: (shiftId) => `/shifts/${shiftId}/drop-off`,
  requestSwap: (shiftId) => `/shifts/${shiftId}/swap`,
}
export default MY_SHIFTS_URLS
