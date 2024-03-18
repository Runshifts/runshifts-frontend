const DASHBOARD_URLS = {
  organization: (organizationId) =>
    `/organizations/${organizationId ? organizationId : "owned"}`,
  snapshot: (organizationId) => `organizations/${organizationId}/snapshot`,
  weeklySchedule: (organizationId, date) =>
    `shifts/${organizationId}/weekly-schedule?date=${date}`,
  employees: (organizationId) => `/organizations/${organizationId}/employees`,
}
export default DASHBOARD_URLS
