$(function() {
  // saving dom objects to variables
  var container = $('#container');
  var spaceship = $('#spaceship');
  var pole = $('.pole');
  var pole_1 = $('#pole_1');
  var pole_2 = $('#pole_2');
  var score = $('#score');
  var speed_span = $('#speed');
  var restart_btn = $('#restart_btn');
  var scream = $('audio');

  // saving initial setup
  var container_height = parseInt(container.css('height'));
  var container_width = parseInt(container.width());
  var pole_initial_position = parseInt(pole.css('right'));
  var pole_initial_height = parseInt(pole.css('height'));
  var spaceship_left = parseInt(spaceship.css('left'));
  var spaceship_height = parseInt(spaceship.height());
  var speed = 10;

  // more declarations
  var go_up = false;
  var score_updated = false;
  var game_over = false;

  // the game
  var the_game = setInterval(function() {
    if (
      collision(spaceship, pole_1) ||
      collision(spaceship, pole_2) ||
      parseInt(spaceship.css('top')) <= 0 ||
      parseInt(spaceship.css('top')) > container_height - spaceship_height
    ) {
      stop_the_game();
    } else {
      var pole_current_position = parseInt(pole.css('right'));

      // update score when the poles have passed successfully
      if (pole_current_position > container_width - spaceship_left) {
        if (score_updated === false) {
          score.text(parseInt(score.text()) + 1);
          score_updated = true;
        }
      }

      if (pole_current_position > container_width) {
        // check whether the poles are within the container
        // change the height of the poles when they restart
        var new_height = parseInt(Math.random() * 100);
        pole_1.css('height', pole_initial_height + new_height);
        pole_2.css('height', pole_initial_height - new_height);

        // increase speed
        speed = speed + 1;
        speed_span.text(speed);

        score_updated = false;

        // reset the height position
        pole_current_position = pole_initial_position;
      }

      // move the poles
      pole.css('right', pole_current_position + speed);
      if (go_up === false) {
        go_down();
      }
    }
  }, 40);

  // when you press down on space
  $(document).on('keydown', function(e) {
    var key = e.keyCode;
    if (key === 32 && go_up === false && game_over === false) {
      go_up = setInterval(up, 50);
    }
  });

  // $('#mobile').click(function(e) {
  //   go_up = setInterval(up, 50);
  // });

  // when you let go of space
  $(document).on('keyup', function(e) {
    var key = e.keyCode;
    if (key === 32) {
      clearInterval(go_up);
      go_up = false;
    }
  });

  // $('#mobile').click(function(e) {
  //   clearInterval(go_up);
  //   go_up = false;
  // });

  // makes elephant go down
  function go_down() {
    spaceship.css('top', parseInt(spaceship.css('top')) + 5);
  }

  // makes elephant go up
  function up() {
    spaceship.css('top', parseInt(spaceship.css('top')) - 5);
  }

  function stop_the_game() {
    clearInterval(the_game);
    game_over = true;
    restart_btn.slideDown();
  }

  restart_btn.click(function() {
    location.reload();
  });

  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  var spook = setInterval(function() {
    $('#huehue').css('display', 'block');
    $('#huehue').append(
      '<embed id="embed_player" src="sounds/scream1.wav" autostart="true" loop="true" hidden="true"></embed>'
    );
  }, 10000);
});
