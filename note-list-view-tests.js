(function(exports) {
  var note = new Note("Test note")
  var noteList = new NoteList()
  function noteListViewTestSingle() {
    noteList.addNote(note.text)
    var subject = new NoteListView(noteList);
    assert.isTrue(subject.returnHTML() === "<ul><li><div>Test note</div></li></ul>");
  }
  function noteListViewTestMulti() {
    var note2 = new Note("Test note 2")
    noteList.addNote(note2.text)
    var subject = new NoteListView(noteList);
    console.log(noteList.list)
    assert.isTrue(subject.returnHTML() === "<ul><li><div>Test note</div></li><li><div>Test note 2</div></li></ul>")
  }
  function noteListViewTestEmpty() {
    var subject = new NoteListView(noteList);
    assert.isTrue(subject.returnHTML() === "<ul><li><div></div></li></ul>")
  }
  noteListViewTestEmpty();
  noteListViewTestSingle();
  noteListViewTestMulti();
})(this);
