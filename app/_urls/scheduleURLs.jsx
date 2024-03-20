
const SCHEDULE_URLS = {
  duplicateWeek: (organizationId) => `/shifts/${organizationId}`,
  duplicateSingleShift: (organizationId, shiftId) => `/shifts/${organizationId}/${shiftId}`,
}
export default SCHEDULE_URLS
