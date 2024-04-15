export const groupNotesByShift = (notes = []) => {
  console.log(notes, "djsfalwoeroiureureiur90r904832948309483904830948092")
  return notes.reduce((acc, note) => {
    if (acc[note.shift?._id]) {
      const isLatestNote =
        !acc[note.shift?._id].latestNote ||
        new Date(acc[note.shift?._id].latestNote.createdAt).getTime() <
          new Date(note.createdAt).getTime()
      acc[note.shift?._id] = {
        notes: [...acc[note.shift?._id].notes, note],
        latestNote: isLatestNote ? note : acc[note.shift?._id].latestNote,
      }
    } else {
      acc[note.shift?._id] = { latestNote: note, notes: [note] }
    }
    return acc
  }, {})
}
