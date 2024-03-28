const TRACKER_URLS = {
  checkin: (organizationId, shiftId) =>
    `/shifts/${organizationId}/${shiftId}/check-in`,
  checkout: (organizationId, shiftId) =>
    `/shifts/${organizationId}/${shiftId}/check-out`,
  startOrResumeBreak: (organizationId, shiftId) =>
    `/shifts/${organizationId}/${shiftId}/start-break`,
  pauseOrEndBreak: (organizationId, shiftId) =>
    `/shifts/${organizationId}/${shiftId}/stop-break`,
}

export default TRACKER_URLS
