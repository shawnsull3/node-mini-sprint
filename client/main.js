$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      type: 'GET',
      data: '',
      success: function(quote){
        $(".quote").text(quote)
      },
      error: function() {
        console.error('Failed to fetch messages');
      }
    });
  }

  function addQuote(quote){
    $.ajax({
      url: 'http://127.0.0.1:3000/quote',
      type: 'POST',
      data: JSON.stringify(quote),
      contentType: 'application/json',
      success: function(){
        console.log('we diiddddd ittttt')
      },
      error: function() {
        console.error('Failed to fetch messages');
      }
    });

  }
});
