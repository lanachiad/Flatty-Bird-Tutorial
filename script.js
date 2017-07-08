$(function() {
  // saving dom objects to variables
  var container = $('container');
  var bird = $('#bird');
  var pole = $('.pole');
  var pole_1 = $('#pole_1');
  var pole_2 = $('#pole_2');
  var score = $('#score');
  var speed_span = $('#speed');
  var restart_btn = $('#restart_btn');

  // saving initial setup
  var container_width = Number(container.width());
  var pole_initial_position = Number(pole.css('right'));
  var pole_initial_height = Number(pole.css('height'));
  var bird_left = Number(bird.css('left'));
  var bird_height = Number(bird.height());
  var speed = 10;
});
