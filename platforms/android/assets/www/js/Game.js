var Game = (function(window, document, Game) {
    Game = {
        /**
         * Initialize game
         */
        initialize: function() {
            Game.Events.bindEvents();
        }
    };

    return Game;
})(window, document, window.Game || {});