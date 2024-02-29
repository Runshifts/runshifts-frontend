
const DASHBOARD_URLS = {
  organization: () => "/organizations/owned",
  snapshot: (organizationId) => `organizations/${organizationId}/snapshot`,
  weeklySchedule: (organizationId, date) =>
  `shifts/${organizationId}/weekly-schedule?date=${date}`,
  employees: (organizationId) => `/organizations/${organizationId}/employees`
}
export default DASHBOARD_URLS 
