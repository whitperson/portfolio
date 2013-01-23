$(function(){

  $('.show_feature').hide();
  $('#coding_projects').click(show_coding_div);
  $('#hide_button').click(hide_coding_div);

});

function show_coding_div()
{
  $('.show_feature').show(1000,'linear');
  $('.show_feature').css('overflow','visible');
}

function hide_coding_div()
{
  $('.show_feature').hide(500,'swing');
}
