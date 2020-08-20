(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList.list
  }
  NoteListView.prototype = (function() {
    function returnHTML() {
      var array = []
      console.log(this.list)
      this.list.forEach(note => array.push(note.text));
      console.log(array)
      return "<ul><li><div>" + array.join('</div></li><li><div>') + "</div></li></ul>"
    }
    return {
      returnHTML
    }
  })();
  exports.NoteListView = NoteListView;
})(this);
