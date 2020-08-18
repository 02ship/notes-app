
(function(exports) {
  function Note(text) {
    this.text = text;
  }

  Note.prototype = (function() {
    function readText() {
      console.log(this.text);
    }
    return {
      readText
    }
  })();
  exports.Note = Note;
})(this);
