(function(exports) {
  var subject = new Note('Test note');
  function noteTest() {
    assert.isTrue(subject.text === 'Test note');
  };

  noteTest();
})(this);
