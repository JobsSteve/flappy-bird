var Game = (function(window, document, Game) {

    Game.Events = {
        /**
         * Bind all events
         */
        bindEvents: function() {
            $('#main-menu').on('pageshow', Game.Events.onMainMenuShow);
            $('#game').on('pageshow', Game.Events.onGameShow);
            $('#highscores').on('pageshow', Game.Events.onHighscoresShow);
            $('#settings').on('pageshow', Game.Events.onSettingsShow);

            $('#exitFromGameButton').on('click', Game.Events.onExitGame);
        },

        onMainMenuShow: function() {},
        onGameShow: function() {
            Game.startNewGame();
        },
        onHighscoresShow: function() {},
        onSettingsShow: function() {},

        onExitGame: function() {
            Game.exit();
        }
    };

    return Game;
})(window, document, window.Game || {});