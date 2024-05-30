const REPORTS_URLS = {
  getAttendance: (organizationId) => `/reports/${organizationId}/attendance`,
  getWorkedHours: (organizationId) => `/reports/${organizationId}/worked-hours`,
  getLabourCosts: (organizationId) => `/reports/${organizationId}/labour-costs`,
  getScheduleAdherence: (organizationId) =>
    `/reports/${organizationId}/schedule-adherence`,
  getShiftsPerformance: (organizationId) =>
    `/reports/${organizationId}/shift-performance"`,
}
export default REPORTS_URLS
