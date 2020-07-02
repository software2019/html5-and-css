// JQuery
// Hide article
$(document).ready(function () {
  $('#hide_button').click(function () {
    $('article').hide();
  });
});

// Show article
$('#show_button').click(function () {
  $('article').show();
});
