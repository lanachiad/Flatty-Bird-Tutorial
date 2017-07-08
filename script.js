$(function() {
  // saving dom objects to variables
  var container = $('#container');
  var bird = $('#bird');
  var pole = $('.pole');
  var pole_1 = $('#pole_1');
  var pole_2 = $('#pole_2');
  var score = $('#score');
  var speed_span = $('#speed');
  var restart_btn = $('#restart_btn');

  // saving initial setup
  var container_width = parseInt(container.width());
  var pole_initial_position = parseInt(pole.css('right'));
  var pole_initial_height = parseInt(pole.css('height'));
  var bird_left = parseInt(bird.css('left'));
  var bird_height = parseInt(bird.height());
  var speed = 10;

  // more declarations
  var go_up = false;

  // the game
  var the_game = setInterval(function() {
    var pole_current_position = parseInt(pole.css('right'));

    // check whether the poles are within the container
    if (pole_current_position > container_width) {
      // change the height of the poles when they restart
      var new_height = parseInt(Math.random() * 100);
      pole_1.css('height', pole_initial_height + new_height);
      pole_2.css('height', pole_initial_height - new_height);

      // increase speed
      speed = speed + 1;
      speed_span.text(speed);

      // reset the height position
      pole_current_position = pole_initial_position;
    }

    // move the poles
    pole.css('right', pole_current_position + speed);
    if (go_up === false) {
      go_down();
    }
  }, 40);

  // when you press down on space
  $(document).on('keydown', function(e) {
    var key = e.keyCode;
    if (key === 32 && go_up === false) {
      go_up = setInterval(up, 50);
    }
  });

  // when you let go of space
  $(document).on('keyup', function(e) {
    var key = e.keyCode;
    if (key === 32) {
      clearInterval(go_up);
      go_up = false;
    }
  });

  function go_down() {
    bird.css('top', parseInt(bird.css('top')) + 5);
  }

  function up() {
    bird.css('top', parseInt(bird.css('top')) - 5);
  }
});
