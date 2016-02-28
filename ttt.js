$(document).on('ready', function(){
  var turn = 0;
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9]];


  $('td').one('click', function(){
    // alert ('Table has been clicked');
      // this === DOM Element
      // $(this) === jQuery Element

      // Idempotent = Always get the same outcome
      // Memoization = Store a computed output for a repeated use
      var self = $(this)

      if ( turn % 2 ) {
        $(self).html('O').addClass('o');
      } else {
      $(self).html('X').addClass('x');
      }
      // $(this).off('click');
      checkForWinner()
      turn++;
  });
  function checkForWinner() {
    $('.x')
  };
});
