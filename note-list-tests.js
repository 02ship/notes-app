(function(exports) {
  var subject = new NoteList();
  function noteListTest() {
    assert.isTrue(subject.list.length === 0);
  }
  function noteListAdd() {
    var note = new Note("Test note")
    subject.addNote(note)
    assert.isTrue(subject.list.includes(note))
  }
  noteListTest();
  noteListAdd();
})(this);
