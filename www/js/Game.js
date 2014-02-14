(function(window, document) {
    //Here I save pipes collection
    var player,
        pipes;

    var Game = new Phaser.Game($(window).width(), $(window).height(), Phaser.AUTO, 'game-scene', {
        preload: preload,
        create: create,
        update: update
    });

    function preload() {
        Game.load.image('bird', 'img/bird.png');
        Game.load.image('pipe', 'img/pipe.gif');
    }

    function create() {
        //Add bird to world
        player = Game.add.sprite(0, 0, 'bird');
        player.scale.setTo(0.3, 0.3);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 6;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

        //Create pipes group
        pipes = Game.add.group();

        //Create pipes and add it to world
        var pipe = pipes.create(0, Game.world.height - 200, 'pipe');
        pipe.scale.setTo(3, 3);
        pipe.body.immovable = true;

        pipe = pipes.create(200, Game.world.height - 200, 'pipe');
        pipe.scale.setTo(3, 3);
        pipe.body.immovable = true;

        pipe = pipes.create(400, Game.world.height - 200, 'pipe');
        pipe.scale.setTo(3, 3);
        pipe.body.immovable = true;

        pipe = pipes.create(600, Game.world.height - 200, 'pipe');
        pipe.scale.setTo(3, 3);
        pipe.body.immovable = true;
    }

    function update() {
        Game.physics.collide(player, pipes);

        player.body.velocity.x = 150;
    }

    $(document).on('pageinit', function() {
        //Start new game
        $('#game').on('pageshow', function() {});

        //Close the game on confirmation button click
        $('#exitFromGameButton').on('click', function() {
            navigator.app.exitApp();
        });
    });
})(window, document);