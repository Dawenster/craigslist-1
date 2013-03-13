$(document).ready(function() {
  $('#create-post').submit(function(e) {
    e.preventDefault();
    var form_data = $(this).serialize();

    $.post('/created', form_data).done(function(data) {
      history.pushState(data, "Thank you", "/edit/" + data.secret_url);
      $('h1').text("Thanks for your post!");
      $('#formy-thing').text("Go to your secret url below to edit: http://localhost:9292/edit/" + data.secret_url);
    });
  });
});
