var Game = (function(window, document, Game) {

    Game = {
        /**
         * Initialize game
         */
        initialize: function() {
            Game.Events.bindEvents();
        },

        /**
         * Start new Game
         */
        startNewGame: function() {
            console.log('Starting a new game');
        },

        /**
         * Close application
         */
        exit: function() {
            navigator.app.exitApp();
        }
    };

    return Game;
})(window, document, window.Game || {});