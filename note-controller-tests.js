(function(exports) {
  function noteControllerTest() {
    var noteList = new NoteList()
    note = new Note("Favourite drink: seltzer")
    noteList.addNote(note)
    var noteController = new NoteController(noteList)
    noteController.changePage()
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
  }
  noteControllerTest();
})(this);
