
const NOTES_URLS = {
  getNotes: (organizationId) => `/notes/${organizationId}`,
  create: (organizationId, shiftId) => `/notes/${organizationId}/${shiftId}`,
}
export default NOTES_URLS
