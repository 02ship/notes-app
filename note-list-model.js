(function(exports) {
  function NoteList() {
    this.list = []
  }
  NoteList.prototype = (function() {
    function listNotes() {
      console.log(this.list);
    }
    function addNote(note) {
      this.list.push(note)
    }
    return {
      listNotes,
      addNote
    }
  })();
  exports.NoteList = NoteList;
})(this);
