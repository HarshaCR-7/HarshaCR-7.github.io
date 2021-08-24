$(function() {
  $( ".sortable" ).sortable({
    connectWith: ".connectedSortable",
    
  }).disableSelection(); 
  $('.add-button').click(function() {
      var txtNewItem = $('#new_text').val();
      $(this).closest('div.container').find('ul').append('<li class="card">'+txtNewItem+'</li>');
  });    
});