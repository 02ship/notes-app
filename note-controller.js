(function(exports) {
  function NoteController(noteList) {
    // this.list = noteList
    this.view = new NoteListView(noteList)
  }
  NoteController.prototype = (function() {
    function changePage() {
      document.getElementById('app').innerHTML = this.view.returnHTML()
    }
    return {
      changePage
    }
  })();
  exports.NoteController = NoteController;
})(this);
