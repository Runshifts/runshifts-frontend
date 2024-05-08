const TIMESHEET_URLS = {
  get: (organizationId) => `/timesheets/${organizationId}`,
  approveSingleShift: (organizationId, shiftId) =>
    `/timesheets/${organizationId}/${shiftId}`,
  approveMultipleShifts: (organizationId) =>
    `/timesheets/${organizationId}/approve`,
  querySingleShift: (organizationId, shiftId) =>
    `/timesheets/queries/${organizationId}/${shiftId}`,
  queryMultipleShifts: (organizationId) =>
    `/timesheets/queries/${organizationId}`,
  getQueries: (organizationId) => `/timesheets/queries/${organizationId}`
}
export default TIMESHEET_URLS
