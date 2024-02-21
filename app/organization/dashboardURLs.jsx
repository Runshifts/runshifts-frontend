
const DASHBOARD_URLS = {
  organization: () => "/organizations/owned",
  snapshot: (organizationId) => `organizations/${organizationId}/snapshot`,
  weeklySchedule: (organizationId, date) =>
  `shifts/${organizationId}/weekly-schedule?date=${date}`,
}
export default DASHBOARD_URLS 
