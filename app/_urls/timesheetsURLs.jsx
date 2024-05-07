const TIMESHEET_URLS = {
  get: (organizationId) => `/timesheets/${organizationId}`,
  approveSingleShift: (organizationId, shiftId) =>
    `/timesheets/${organizationId}/${shiftId}`,
  approveMultipleShifts: (organizationId) =>
    `/timesheets/${organizationId}/approve`,
}
export default TIMESHEET_URLS
