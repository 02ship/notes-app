(function(exports) {
  function NoteList() {
    this.list = []
  }
  NoteList.prototype = (function() {
    function listNotes() {
      console.log(this.list);
    }
    return {
      listNotes
    }
  })();
  exports.NoteList = NoteList;
})(this);
