export const groupNotesByShift = (notes = []) => {
  return notes.reduce((acc, note) => {
    if (acc[note.shift]) {
      const isLatestNote =
        !acc[note.shift].latestNote ||
        new Date(acc[note.shift].latestNote.createdAt).getTime() <
          new Date(note.createdAt).getTime()
      acc[note.shift] = {
        notes: [...acc[note.shift].notes, note],
        latestNote: isLatestNote ? note : acc[note.shift].latestNote,
      }
    } else {
      acc[note.shift] = { latestNote: note, notes: [note] }
    }
    return acc
  }, {})
}
