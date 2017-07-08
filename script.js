$(function() {
  // saving dom objects to variables
  const container = $('container');
  const bird = $('#bird');
  const pole = $('.pole');
  const pole_1 = $('#pole_1');
  const pole_2 = $('#pole_2');
  const score = $('#score');
  const speed_span = $('#speed');
  const restart_btn = $('#restart_btn');

  // saving initial setup
  let container_width = Number(container.width());
  let pole_initial_position = Number(pole.css('right'));
  let pole_initial_height = Number(pole.css('height'));
  let bird_left = Number(bird.css('left'));
  let bird_height = Number(bird.height());
  let speed = 10;
});
