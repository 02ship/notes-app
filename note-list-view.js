(function(exports) {
  function NoteListView(NoteList) {
    this.list = NoteList.list
  }
  NoteListView.prototype = (function() {
    function returnHTML() {
      return "<ul><li><div>" + this.list.join('</div></li><li><div>') + "</div></li></ul>"
    }
    return {
      returnHTML
    }
  })();
  exports.NoteListView = NoteListView;
})(this);
