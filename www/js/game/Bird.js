var Game = (function(window, document, Game) {

    Game.Bird = function() {
        if (!(this instanceof Game.Bird)) {
            return new Game.Bird();
        }

        var texture = PIXI.Texture.fromImage(Game.Config.birdSpriteUrl, true);

        this.bird = new PIXI.Sprite(texture);

        this.bird.anchor.x = 0.5;
        this.bird.anchor.y = 0.5;
        this.bird.position.x = 200;
        this.bird.position.y = 200;

        return this;
    };

    Game.Bird.prototype = {
        addToStage: function(stage) {
            stage.addChild(this.bird);
        }
    };

    return Game;
})(window, document, window.Game || {});