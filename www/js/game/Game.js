var Game = (function(window, document, Game) {

    Game = function(options) {
        var self = this;

        $.extend(Game.Config, options);

        this.stage = new Game.Stage().addRenderer();
        this.bird = new Game.Bird().addToStage(this.stage);

        requestAnimFrame(function() {
            self.stage.renderLoop(self.stage);
        });

        return this;
    };

    Game.prototype = {

    };

    return Game;
})(window, document, window.Game || {});