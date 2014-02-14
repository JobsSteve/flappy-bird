var Game = (function(window, document, Game) {

    Game.Stage = function() {
        if (!(this instanceof Game.Stage)) {
            return new Game.Stage();
        }

        this.stage = new PIXI.Stage(0x66FF99);
        this.renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());

        return this;
    };

    Game.Stage.prototype = {
        getStage: function() {
            return this.stage;
        },

        getRenderer: function() {
            return this.renderer;
        },

        addRenderer: function() {
            $('#game-scene').html(this.renderer.view);
            return this;
        },

        addChild: function(obj) {
            this.stage.addChild(obj);
            return this;
        },

        renderLoop: function(stage) {
            requestAnimFrame(function() {
                stage.renderLoop(stage);
            });

            stage.getRenderer().render(stage.getStage());
        }
    };

    return Game;
})(window, document, window.Game || {});